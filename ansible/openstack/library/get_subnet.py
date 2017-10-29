from ansible.module_utils.basic import AnsibleModule
import pydevd
import ast

#pydevd.settrace('10.3.3.107', port=8080, stdoutToServer=True, stderrToServer=True)


def run_module():
    # define the available arguments/parameters that a user can pass to
    # the module
    module_args = dict(
        data=dict(type='str', required=True),
    )

    # seed the result dict in the object
    # we primarily care about changed and state
    # change is if this module effectively modified the target
    # state will include any data that you want your module to pass back
    # for consumption, for example, in a subsequent task
    result = dict(
        changed=False,
        subnet=''
    )

    # the AnsibleModule object will be our abstraction working with Ansible
    # this includes instantiation, a couple of common attr would be the
    # args/params passed to the execution, as well as if the module
    # supports check mode
    module = AnsibleModule(
        argument_spec=module_args,
        supports_check_mode=True
    )

    # Function
    jsonData = ast.literal_eval(module.params["data"])
    subnets = {}

    for subnet in jsonData['ansible_facts']['openstack_subnets']:
        if subnet["cidr"].split(".")[0] == "10":
            subnets[subnet["cidr"].split(".")[1]] = True

    for octate in range(0, 200, 1):
        if not str(octate) in subnets:
            result["subnet"] = "10.{0}.0.0/24".format(str(octate))
            result["changed"] = True
            if module.check_mode:
                return result
            else:
                module.exit_json(**result)

    module.fail_json(msg='Cant find a free subnet', **result)


def main():
    run_module()


if __name__ == '__main__':
    main()