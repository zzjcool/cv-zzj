// 相关网站的链接
const projectList = [
  {
    name: '华东师范大学水杉在线教育平台',
    demo: 'https://www.shuishan.net.cn/',
    detail: '华东师范大学数据科学与工程学院推出的新一代数字化全链路在线学习平台。',
    technology: [
      '云实训平台：Kubernetes+Client-go+Gin+GORM+Xterm.js'
    ],
    duty: [
      'DevOps实践：编写Dockerfile，使用GitLab ci通过自部署的Gitlab runner完成镜像打包并上传到私有仓库,最终触发Hook，结合K8S的探针实现无缝更新。',
      '云实训平台：基于Serverless理念，后端使用Golang进行开发，通过Client-go管理Kubernetes集群，通过不同的镜像提供在线实训容器，为了提供Web端命令行功能，将容器内部stdin、stdout重定向，并通过websocket的方式暴露给用户。采用JWT进行鉴权。'
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

export default projectList
