create file on /etc/docker/plugins/authz.spec
and config tcp://<Plugin ip addr server>
add to docker daemon
--authorization-plugin=authz
and restart the docker engine
