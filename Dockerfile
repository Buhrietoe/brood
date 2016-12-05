FROM centos:centos7

ENV GO_VERSION go1.7.linux-amd64
ENV BROOD_ADDRESS 0.0.0.0
ENV BROOD_PORT 3456

COPY ceph.repo /etc/yum.repos.d/ceph.repo
RUN yum install -y epel-release && \
    yum install -y ceph && \
    yum autoremove -y && \
    yum clean all

COPY . /usr/local/src/github.com/Buhrietoe/brood
RUN set -x && \
    curl -sL https://storage.googleapis.com/golang/$GO_VERSION.tar.gz | tar -C /opt -xz && \
    export PATH=$PATH:/opt/go/bin && \
    export GOROOT=/opt/go && \
    export GOPATH=/usr/local && \
    cd /usr/local/src/github.com/Buhrietoe/brood && \
    go build -v -o /usr/local/bin/brood main.go && \
    rm -rf /opt/go /usr/local/pkg

RUN set -x && \
    yum install -y npm nodejs-grunt-cli && \
    cd /usr/local/src/github.com/Buhrietoe/brood/static && \
    npm install && \
    grunt build && \
    yum remove -y npm nodejs-grunt-cli && \
    yum autoremove -y && \
    yum clean all

EXPOSE $BROOD_PORT

CMD [ "brood", "server" ]
