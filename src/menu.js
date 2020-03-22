/**
 * 定义sidebar和header中的菜单项
 *
 * 一些约定:
 * 1.菜单最多3层;
 * 2.只有"叶子"节点才能跳转;
 * 3.所有的key都不能重复;
 */

// 其实理论上可以嵌套更多层菜单的, 但是我觉得超过3层就不好看了
// 可用的图标见这里: https://ant.design/components/icon-cn/

// 定义siderbar菜单
const sidebarMenu = [
  {
    key: 'home',  // route时url中的值
    name: '首页',  // 在菜单中显示的名称
  },
  {
    key: 'organization',
    name: '组织架构',
    child: [
      {
        key: 'userManagement',
        name: '用户管理',
      },
      {
        key: 'departmentManagement',
        name: '部门管理',
      },
      {
        key: 'jobManagement',
        name: '岗位管理',
      },
      {
        key: 'roleManagement',
        name: '角色管理',
      },
    ],
  },
  // {
  //   key: 'safety',
  //   name: '安全管理制度',
  //   child: [
  //     {
  //       key: 'lawsRegulations',
  //       name: '法律法规和标准',
  //     },
  //     {
  //       key: 'workSafety',
  //       name: '安全生产规章制度',
  //     },
  //     {
  //       key: 'jobSafety',
  //       name: '作业安全',
  //       child: [{
  //         key: 'construction',
  //         name: '施工管理',
  //       }],
  //     },
  //     {
  //       key: 'document',
  //       name: '文档管理',
  //     },
  //     {
  //       key: 'accidentEmergency',
  //       name: '事故与应急管理',
  //     },
  //   ],
  // },
  // {
  //   key: 'training',
  //   name: '培训管理',
  // },
  // {
  //   key: 'exam',
  //   name: '考试管理',
  // },
  // {
  //   key: 'dynamic',
  //   name: '动态通知',
  // },
  // {
  //   key: 'site',
  //   name: '现场管理',
  //   child: [
  //     {
  //       key: 'equipment',
  //       name: '设备管理',
  //     },
  //     {
  //       key: 'oil',
  //       name: '发油管理',
  //     },
  //     {
  //       key: 'measurement',
  //       name: '计量管理',
  //     },
  //     {
  //       key: 'video',
  //       name: '视频管理',
  //     },
  //     {
  //       key: 'power',
  //       name: '电力管理',
  //     },
  //     {
  //       key: 'security',
  //       name: '安防管理',
  //       child: [
  //         {
  //           key: 'world',
  //           name: '周界',
  //         },
  //         {
  //           key: 'accessCtrl',
  //           name: '门禁管理',
  //         },
  //         {
  //           key: 'video',
  //           name: '视频管理',
  //         },
  //         {
  //           key: 'vehicle',
  //           name: '车辆管理',
  //         },
  //         {
  //           key: 'equipment',
  //           name: '设备巡检',
  //         },
  //         {
  //           key: 'firePre',
  //           name: '火灾预防',
  //         },
  //       ],
  //     },
  //     {
  //       key: 'OilRecovery',
  //       name: '油气回收',
  //     },
  //     {
  //       key: 'facilitiesAndProcess',
  //       name: '生产设施及工艺安全',
  //     },
  //     {
  //       key: 'personnelPatrol',
  //       name: '人员巡更',
  //     },
  //   ],
  // },
  // {
  //   key: 'energy',
  //   name: '能耗管理',
  // },
  // {
  //   key: 'emergency',
  //   name: '应急管理',
  // }, {
  //   key: 'report',
  //   name: '报表管理',
  // }, {
  //   key: 'occupational',
  //   name: '职业健康',
  //   child: [
  //     {
  //       key: 'occupationalHazards',
  //       name: '职业病危害',
  //     },
  //   ],
  // },
  // {
  //   key: 'risk',
  //   name: '风险管理',
  //   child: [
  //     {
  //       key: 'governanceLedger',
  //       name: '治理台账',
  //     },
  //     {
  //       key: 'majorHazards',
  //       name: '重大危险源',
  //     },
  //     {
  //       key: 'change',
  //       name: '变更',
  //     },
  //   ],
  // }, {
  //   key: 'hazardousChemicals',
  //   name: '危险化学品管理',
  // },
  // {
  //   key: 'staffStructure',
  //   name: '人员架构管理',
  //   child: [
  //     {
  //       key: 'institutions',
  //       name: '机构和职责',
  //     },
  //     {
  //       key: 'inspectionAndSelf',
  //       name: '检查与自评管理',
  //     },
  //   ],
  // },
  // {
  //   key: 'system',
  //   name: '系统管理',
  //   child: [
  //     {
  //       key: 'role',
  //       name: '角色管理',
  //     },
  //     {
  //       key: 'permission',
  //       name: '权限分配',
  //     },
  //     {
  //       key: 'password',
  //       name: '密码设置',
  //     },
  //     {
  //       key: 'other',
  //       name: '其他',
  //     },
  //   ],
  // },
];

export default sidebarMenu;

// 定义header菜单, 格式和sidebar是一样的
// 特殊的地方在于, 我规定header的最右侧必须是用户相关操作的菜单, 所以定义了一个特殊的key
// 另外注意这个菜单定义的顺序是从右向左的, 因为样式是float:right
export const headerMenu = [
  {
    // 一个特殊的key, 定义用户菜单, 在这个submenu下面设置icon/name不会生效
    key: 'userMenu',
    child: [
      {
        key: 'modifyUser',
        name: '修改用户信息',
        icon: 'bulb',
        // 对于headerMenu的菜单项, 可以让它跳到外部地址, 如果设置了url属性, 就会打开一个新窗口
        // 如果不设置url属性, 行为和sidebarMenu是一样的, 激活特定的组件, 注意在index.js中配置好路由, 否则会404
        url: 'http://jxy.me',
      },
      {
        key: 'user222',
        name: '药药切克闹',
        icon: 'rocket',
      },
      {
        key: 'user333',
        name: '选项3',
        child: [
          {
            key: 'user333aaa',
            name: 'user333aaa',
            icon: 'windows',
          },
          {
            key: 'user333bbb',
            name: 'user333bbb',
            url: 'http://jxy.me',
          },
        ],
      },
    ],
  },
  {
    key: 'headerMenu2',
    name: 'header菜单',
    icon: 'team',
    child: [
      {
        key: 'headerMenu111',
        name: '菜单项1',
        icon: 'windows',
        url: 'http://jxy.me',
      },
      {
        key: '菜单项2',
        name: '短信表管理',
        url: 'http://jxy.me',
      },
      {
        key: '菜单项3',
        name: '选项3',
        icon: 'chrome',
        url: 'http://jxy.me',
      },
    ],
  },
  {
    key: 'headerMenu3',
    name: '我没有子菜单',
    icon: 'setting',
    url: 'http://jxy.me',
  },
  {
    key: 'headerMenu4',
    name: '我也没有子菜单',
    icon: 'shopping-cart',
  },
  {
    key: 'spectacular',
    name: '看板',
  },
];
