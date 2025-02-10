// 相关网站的链接
const projectList = [
  {
    name: '腾讯-中间件研发工程师-云函数',
    demo: '2021.11-2022.4',
    detail: '腾讯云，云函数（SCF）调度层开发。',
    technology: [
      ''
    ],
    duty: [
      '云函数冷启动宿主机调度性能优化：重构原有逻辑，添加并发能力，提升宿主机调度的性能。',
      '云函数镜像拉取优化：通过宿主机添加LRU缓存，对镜像进行缓存，提高镜像拉取的效率。'
    ]
  },
  {
    name: '腾讯-中间件研发工程师-消息队列',
    demo: '2022.4-现今',
    detail: '腾讯云消息队列产品RocketMQ、RabbitMQ、MQTT',
    technology: [
    ],
    duty: [
      '消息队列产品发货平台设计与开发：基于Kubernetes + Helm + 状态机等技术实现了消息队列的自动发货功能。支持了RocketMQ4.x、RocketMQ5.x、RabbitMQ、MQTT、Pulsar消息队列的上云。',
      'MQTT Benchmark工具开发，使用Golang开发出高性能、支持一机一证书、监控采集、分布式压测的benchmark工具。',
      '消息队列可观测性增强、借助Sentinel实现分布式限流、支持消息队列动态更新配置、TLS证书动态重载。',
      'RabbitMQ、RocketMQ消息队列私有化输出，基于容器化，实现快速输出私有化平台。',
      'MQTT 共享订阅模式，消息顺序性保证。',
      'CI/CD 流水线搭建、对版本管理、部署、测试、发布等流程进行自动化',
      '开发效率提升，借助Docker compose实现开发环境快速构建'
    ]
  }
]

export default projectList
