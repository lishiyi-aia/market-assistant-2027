export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  "zh": {
    "title": "项目经历",
    "closeLabel": "返回",
    "openLabel": "展开作品",
    "hint": "继续下滑",
    "awardsLabel": "项目成果",
    "visitLabel": "查看完整项目",
    "detailPlaceholder": "项目详情",
    "phImageLabel": "项目预览",
    "phButtonLabel": "打开项目",
    "countLabel": (n: number) => `${n} 个项目`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "科技活动与数字营销支持",
        "tagline": "调研筹备｜内容物料｜活动执行｜AI复盘",
        "items": [
          {
            "name": "AI资讯产品市场活动与渠道推广",
            "meta": "Technology Events & Digital Marketing Support",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "调研与筹备：问卷反馈→宣传卖点→分阶段推广",
              "执行与素材：100+条内容，达人配合及科技活动",
              "数据与优化：AI看板、标题/首图/正文A/B测试",
              "项目结果：注册较前周+50%，首次专题创建率相对约+15%"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "高校推广与产品内容支持",
        "tagline": "活动组织｜需求反馈｜素材复用｜合作跟进",
        "items": [
          {
            "name": "AI教育产品高校推广与市场支持",
            "meta": "University Promotion & Product Content Support",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "筹备与执行：高校宣讲、产品演示、试用及答疑",
              "内容与反馈：100+条反馈，30+篇指南/FAQ/案例",
              "协作与交接：产品业务协同，东南亚合作跟进",
              "改进与结果：10条建议，期间核心功能使用率+30%"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "海外新品传播与渠道执行",
        "tagline": "新品调研｜英文内容｜渠道排期｜内容复盘",
        "items": [
          {
            "name": "ZUS Coffee新品传播与渠道支持",
            "meta": "Overseas Product Communication & Channel Support",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "调研与卖点：用户偏好、社媒反馈及竞品宣传",
              "内容与执行：50条Instagram，拍摄剪辑与英文文案",
              "渠道与排期：线上首发及FamilyMart传播配合",
              "复盘与结果：15+次复盘，协同带动账号粉丝增长1.1w+"
            ]
          }
        ]
      }
    ]
  },
  "en": {
    "title": "Project Experience",
    "closeLabel": "Back",
    "openLabel": "Open case",
    "hint": "Scroll to continue",
    "awardsLabel": "Outcomes",
    "visitLabel": "View full case",
    "detailPlaceholder": "Project details",
    "phImageLabel": "Project preview",
    "phButtonLabel": "Open project",
    "countLabel": (n: number) => `${n} projects`,
    "sections": [
      {
        "id": "project-1",
        "no": "01",
        "title": "Technology Events & Digital Marketing",
        "tagline": "Research · Materials · Event Execution · AI Reviews",
        "items": [
          {
            "name": "AI Information Product: Events & Channel Promotion",
            "meta": "Marketing Support from Research to Review",
            "slug": "ai-news-dashboard",
            "link": `${import.meta.env.BASE_URL}projects/ai-news-dashboard/case_study.html`,
            "tags": [
              "Preparation: feedback and surveys → messages → user-stage promotion",
              "Execution: 100+ posts, creator support and technology events",
              "Optimization: AI dashboard, title / cover / copy A/B tests",
              "Results: registrations +50% vs. prior week; first-topic rate about +15% relatively"
            ]
          }
        ]
      },
      {
        "id": "project-2",
        "no": "02",
        "title": "University Promotion & Product Content",
        "tagline": "Events · Feedback · Reusable Assets · Partnerships",
        "items": [
          {
            "name": "AI Education: University Promotion & Market Support",
            "meta": "Event Coordination, Product Communication & Feedback",
            "slug": "ai-education-partnership",
            "link": `${import.meta.env.BASE_URL}projects/ai-education-partnership/case_study.html`,
            "tags": [
              "Execution: university presentations, demonstrations, trials and Q&A",
              "Inputs and outputs: 100+ feedback items; 30+ guides, FAQs and cases",
              "Coordination: product and business teams; Southeast Asia partner handoff",
              "Results: 10 suggestions; core-feature usage +30% during the internship"
            ]
          }
        ]
      },
      {
        "id": "project-4",
        "no": "03",
        "title": "Overseas Product Communication & Channels",
        "tagline": "Research · English Content · Schedules · Reviews",
        "items": [
          {
            "name": "ZUS Coffee: Product Communication & Channel Support",
            "meta": "Research, Social Publishing & Retail Coordination",
            "slug": "zus-everywhere",
            "link": `${import.meta.env.BASE_URL}projects/zus-everywhere/case_study.html`,
            "tags": [
              "Research: user preferences, social feedback and competitor communication",
              "Execution: 50 Instagram posts, shooting, editing and English copy",
              "Channels: online launches and FamilyMart assets and schedules",
              "Reviews: 15+ reviews; contributed to 11k+ overall follower growth"
            ]
          }
        ]
      }
    ]
  }
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
