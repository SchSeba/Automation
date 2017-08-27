# Automation
https://github.com/mark-church/docs/blob/master/local-scope-swarm-networking.md

# Docker logs events for docsec porject
2017-08-27T12:07:45.754419854+03:00 network create e4b7a8419f157dcfadfe7b2dc1851543554b360e2c43ca9a81ea308f65d0707e (name=local-bridge, type=bridge)

2017-08-27T12:08:08.996899468+03:00 network destroy e4b7a8419f157dcfadfe7b2dc1851543554b360e2c43ca9a81ea308f65d0707e (name=local-bridge, type=bridge)
2017-08-27T12:09:38.638944458+03:00 network create afe7ae77a1b54adf959eca50b3523035fa01e1b6f8ace6769e218ae40bd06212 (name=local-macvlan, type=macvlan)



ip a
2017-08-27T12:10:11.075572010+03:00 network destroy afe7ae77a1b54adf959eca50b3523035fa01e1b6f8ace6769e218ae40bd06212 (name=local-macvlan, type=macvlan)
2017-08-27T12:10:18.173522515+03:00 network create 8e24cf49e09d4022d304d1b4e8632b5539523efae0f7fab78fcb35f75645b1b7 (name=local-macvlan, type=macvlan)
2017-08-27T12:11:49.118151155+03:00 network destroy 8e24cf49e09d4022d304d1b4e8632b5539523efae0f7fab78fcb35f75645b1b7 (name=local-macvlan, type=macvlan)
2017-08-27T12:11:54.449493531+03:00 network create 17a82ad927340805bf2ab182ddf739f0dde7545a3a0e3483dbf35b5389142cf4 (name=local-macvlan, type=macvlan)



2017-08-27T12:12:34.606241893+03:00 container create da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764 (image=nginx, name=local-macvlan)
2017-08-27T12:12:34.688703719+03:00 network connect 17a82ad927340805bf2ab182ddf739f0dde7545a3a0e3483dbf35b5389142cf4 (container=da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764, name=local-macvlan, type=macvlan)
2017-08-27T12:12:34.919551436+03:00 container start da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764 (image=nginx, name=local-macvlan)



2017-08-27T12:14:32.152206960+03:00 container kill da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764 (image=nginx, name=local-macvlan, signal=9)
2017-08-27T12:14:32.195055648+03:00 container die da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764 (exitCode=137, image=nginx, name=local-macvlan)
2017-08-27T12:14:32.319929804+03:00 network disconnect 17a82ad927340805bf2ab182ddf739f0dde7545a3a0e3483dbf35b5389142cf4 (container=da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764, name=local-macvlan, type=macvlan)
2017-08-27T12:14:32.417380103+03:00 container destroy da636bc978f04b32fcf988c2a242b37f470086343b82756d061dda5285fa9764 (image=nginx, name=local-macvlan)
2017-08-27T12:14:36.916832779+03:00 network destroy 17a82ad927340805bf2ab182ddf739f0dde7545a3a0e3483dbf35b5389142cf4 (name=local-macvlan, type=macvlan)
2017-08-27T12:20:23.174465834+03:00 network create d44655c850a0aecbc86dabd6e57a13e588968fd4f9aa24c2f0079cce2cf20ee0 (name=mv-config, type=null)
2017-08-27T12:21:57.282315798+03:00 network create 505184900d7c6f8310c2a6547955b09cc857e56340055bb947c8b81ead8da1cd (name=mv-config, type=null)



2017-08-27T12:22:28.638521452+03:00 network create lwos64mqm9og0tnsd11c3ihqr (name=swarm-macvlan)
2017-08-27T12:22:28.643199166+03:00 network update lwos64mqm9og0tnsd11c3ihqr (name=swarm-macvlan)

2017-08-27T12:22:58.440058574+03:00 service create ntmz3eyz44vltd8827glrnuty (name=swarm-macvlan)
2017-08-27T12:22:58.446301328+03:00 service update ntmz3eyz44vltd8827glrnuty (name=swarm-macvlan)
2017-08-27T12:23:13.753194906+03:00 network create lwos64mqm9og0tnsd11c3ihqr (name=swarm-macvlan, type=macvlan)
2017-08-27T12:23:13.874618822+03:00 container create 1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=ntmz3eyz44vltd8827glrnuty, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=roxd397p33h7nhjzdmldt5jsx, com.docker.swarm.task.name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx)
2017-08-27T12:23:13.946099421+03:00 network connect lwos64mqm9og0tnsd11c3ihqr (container=1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355, name=swarm-macvlan, type=macvlan)
2017-08-27T12:23:14.205595711+03:00 container start 1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=ntmz3eyz44vltd8827glrnuty, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=roxd397p33h7nhjzdmldt5jsx, com.docker.swarm.task.name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx)



2017-08-27T12:23:45.898628979+03:00 service remove ntmz3eyz44vltd8827glrnuty (name=swarm-macvlan)
2017-08-27T12:23:48.010237685+03:00 container kill 1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=ntmz3eyz44vltd8827glrnuty, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=roxd397p33h7nhjzdmldt5jsx, com.docker.swarm.task.name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, signal=15)
2017-08-27T12:23:48.060628831+03:00 container die 1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=ntmz3eyz44vltd8827glrnuty, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=roxd397p33h7nhjzdmldt5jsx, com.docker.swarm.task.name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, exitCode=0, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx)
2017-08-27T12:23:48.161086774+03:00 network disconnect lwos64mqm9og0tnsd11c3ihqr (container=1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355, name=swarm-macvlan, type=macvlan)
2017-08-27T12:23:48.218529408+03:00 container stop 1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=ntmz3eyz44vltd8827glrnuty, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=roxd397p33h7nhjzdmldt5jsx, com.docker.swarm.task.name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx)
2017-08-27T12:23:48.235794223+03:00 network destroy lwos64mqm9og0tnsd11c3ihqr (name=swarm-macvlan, type=macvlan)
2017-08-27T12:23:48.263913417+03:00 container destroy 1d46fd9cec9bfa65836a45f3b63a2a3f68777c1211983b45913bc0f80c5d3355 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=ntmz3eyz44vltd8827glrnuty, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=roxd397p33h7nhjzdmldt5jsx, com.docker.swarm.task.name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.roxd397p33h7nhjzdmldt5jsx)








2017-08-27T12:24:03.876949716+03:00 service create smune31ux15knh0u8gtwr10rw (name=swarm-macvlan)
2017-08-27T12:24:03.885574814+03:00 service update smune31ux15knh0u8gtwr10rw (name=swarm-macvlan)


2017-08-27T12:24:19.167017055+03:00 network create lwos64mqm9og0tnsd11c3ihqr (name=swarm-macvlan, type=macvlan)
2017-08-27T12:24:19.271214355+03:00 container create 992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=cvfjaltpczg76u3rzl6anyr12, com.docker.swarm.task.name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12)
2017-08-27T12:24:19.403076430+03:00 network connect sq6jktf5hok9cd6sps121ieel (container=992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953, name=ingress, type=overlay)
2017-08-27T12:24:19.506031134+03:00 network connect lwos64mqm9og0tnsd11c3ihqr (container=992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953, name=swarm-macvlan, type=macvlan)
2017-08-27T12:24:19.989961340+03:00 container start 992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=cvfjaltpczg76u3rzl6anyr12, com.docker.swarm.task.name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12)


docker net2017-08-27T12:24:58.670811337+03:00 network create 9ev44t5yjvue5s6mj3mm94wqo (name=swarm-overlay)
2017-08-27T12:24:58.675783532+03:00 network update 9ev44t5yjvue5s6mj3mm94wqo (name=swarm-overlay)



2017-08-27T12:25:55.137988284+03:00 service update smune31ux15knh0u8gtwr10rw (name=swarm-macvlan)
2017-08-27T12:25:55.142676095+03:00 service update smune31ux15knh0u8gtwr10rw (name=swarm-macvlan)
2017-08-27T12:25:55.149143386+03:00 service update smune31ux15knh0u8gtwr10rw (name=swarm-macvlan, updatestate.new=updating)
2017-08-27T12:25:55.487138478+03:00 network create 9ev44t5yjvue5s6mj3mm94wqo (name=swarm-overlay, type=overlay)
2017-08-27T12:25:55.576558008+03:00 container create fa223a15d1fad07df1343768b2d2c13c300016aad0523a7a5692b1cf7dcd7c0f (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=vr5bk27kfqesk0bct903k5pe5, com.docker.swarm.task.name=swarm-macvlan.1.vr5bk27kfqesk0bct903k5pe5, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.vr5bk27kfqesk0bct903k5pe5)
2017-08-27T12:25:58.333224594+03:00 container kill 992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=cvfjaltpczg76u3rzl6anyr12, com.docker.swarm.task.name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12, signal=15)
2017-08-27T12:25:58.367860800+03:00 container die 992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=cvfjaltpczg76u3rzl6anyr12, com.docker.swarm.task.name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12, exitCode=0, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12)
2017-08-27T12:25:58.597978082+03:00 network disconnect sq6jktf5hok9cd6sps121ieel (container=992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953, name=ingress, type=overlay)
2017-08-27T12:25:58.598001195+03:00 network disconnect lwos64mqm9og0tnsd11c3ihqr (container=992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953, name=swarm-macvlan, type=macvlan)
2017-08-27T12:25:58.650485895+03:00 container stop 992797f11b99fe214f63ab95d4e87d359e8a2ab463583841c3e6331ac5fad953 (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=cvfjaltpczg76u3rzl6anyr12, com.docker.swarm.task.name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.cvfjaltpczg76u3rzl6anyr12)
2017-08-27T12:25:59.238254121+03:00 network connect 9ev44t5yjvue5s6mj3mm94wqo (container=fa223a15d1fad07df1343768b2d2c13c300016aad0523a7a5692b1cf7dcd7c0f, name=swarm-overlay, type=overlay)
2017-08-27T12:25:59.282300875+03:00 network connect sq6jktf5hok9cd6sps121ieel (container=fa223a15d1fad07df1343768b2d2c13c300016aad0523a7a5692b1cf7dcd7c0f, name=ingress, type=overlay)
2017-08-27T12:25:59.360029934+03:00 network connect lwos64mqm9og0tnsd11c3ihqr (container=fa223a15d1fad07df1343768b2d2c13c300016aad0523a7a5692b1cf7dcd7c0f, name=swarm-macvlan, type=macvlan)
2017-08-27T12:25:59.795387672+03:00 container start fa223a15d1fad07df1343768b2d2c13c300016aad0523a7a5692b1cf7dcd7c0f (com.docker.swarm.node.id=35a8jlw3l181ty5z9yk7ird1h, com.docker.swarm.service.id=smune31ux15knh0u8gtwr10rw, com.docker.swarm.service.name=swarm-macvlan, com.docker.swarm.task=, com.docker.swarm.task.id=vr5bk27kfqesk0bct903k5pe5, com.docker.swarm.task.name=swarm-macvlan.1.vr5bk27kfqesk0bct903k5pe5, image=nginx:latest@sha256:788fa27763db6d69ad3444e8ba72f947df9e7e163bad7c1f5614f8fd27a311c3, name=swarm-macvlan.1.vr5bk27kfqesk0bct903k5pe5)
2017-08-27T12:26:04.955328662+03:00 service update smune31ux15knh0u8gtwr10rw (name=swarm-macvlan, updatestate.new=completed, updatestate.old=updating)
