// 实习经验
const practiceList = [
  {
    name: '华为',
    duration: '2021.6-2021.9',
    job: '云计算开发工程师',
    technology: [
      '云实训平台：Kubernetes+Client-go+Gin+GORM+Xterm.js'
    ],
    duty: [
      '微服务中间件容灾升级：针对单 Kafka 集群存在的单点故障风险，设计并落地微服务的多集群容灾方案（Multi-Cluster Failover），实现了跨区域的高可用部署，保障了业务连续性。',
      'LFS 数据容灾工具开发：为保障核心代码资产安全，基于 Golang 开发高性能备份工具，将 LFS 大文件异步备份至 OBS 对象存储；实现了并发上传控制、限流保护及断点续传（结果缓存）功能。',
      'GitLab 核心组件重构：主导 GitLab Shell 及 Git Hook 模块的架构升级，使用 Golang 重构原有的 Ruby 实现；通过优化执行链路，显著降低了 Hook 触发延迟，提升了代码的可维护性与系统在高并发场景下的性能。'
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
