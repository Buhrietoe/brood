FROM centos:centos7

ENV GO_VERSION go1.7.linux-amd64
ENV BROOD_ADDRESS 0.0.0.0
ENV BROOD_PORT 3456

RUN mkdir -p /usr/local/src/github.com/Buhrietoe/brood
COPY ceph.repo /etc/yum.repos.d/ceph.repo
RUN yum install -y epel-release && \
    yum install -y ceph

COPY . /usr/local/src/github.com/Buhrietoe/brood
RUN set -x && \
    curl -sL https://storage.googleapis.com/golang/$GO_VERSION.tar.gz | \
      tar -C /opt -xz && \
    export PATH=$PATH:/opt/go/bin && \
    export GOROOT=/opt/go && \
    export GOPATH=/usr/local && \
    cd /usr/local/src/github.com/Buhrietoe/brood && \
    go install -v . && \
    rm -rf /opt/go /usr/local/pkg /usr/local/src/github.com

EXPOSE $BROOD_PORT

CMD [ "brood", "server" ]
