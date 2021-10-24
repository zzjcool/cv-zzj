// 实习经验
const practiceList = [
  {
    name: '华为',
    duration: '2021.6-至今',
    job: '云计算开发工程师',
    technology: [
      '云实训平台：Kubernetes+Client-go+Gin+GORM+Xterm.js'
    ],
    duty: [
      '微服务Kafka容灾实现：为避免单区域服务出现故障导致服务不可用，对单Kafka集群的微服务进行升级以支持多Kafka集群，增加微服务的容灾能力。',
      '代码仓库LFS文件容灾工具：代码仓库文件使用LFS进行存储，为避免存储故障产生的数据丢失风险，需要将LFS文件备份到OBS中，工具支持命令行操作、并发上传文件、限制并发数、备份结果缓存等。',
      'Gitlab开发：Gitlab部分模块如Gitlab Shell原先使用Ruby开发，为了提高效率同时增加可维护性，使用Golang进行重构优化。对于Git Hook模块优化其架构，使用Go重构Hook。'
    ]
  }
  // {
  //   name: '夏普解决方案网站',
  //   demo: 'http://sharp.next-lab.cn/',
  //   // detail: '在线教育平台',
  //   technology: [
  //     '后端基于Spring Boot',
  //     '前端采用Element UI，支持响应式布局'
  //   ],
  //   duty: [
  //     '全栈开发',
  //     '数据库设计'
  //   ]
  // }
]

export default practiceList
