/**
 * 智能营销平台 - 平台端运营管控台 Mock数据
 */

// 合作机构
const institutions = [
    { id: 1, name: "江苏银行", type: "商业银行", level: "战略合作", products: 5, pushCount: 12000, loanAmount: 8500, status: "正常" },
    { id: 2, name: "苏州农商行", type: "农商银行", level: "重点合作", products: 3, pushCount: 8000, loanAmount: 4200, status: "正常" },
    { id: 3, name: "南京银行", type: "商业银行", level: "战略合作", products: 4, pushCount: 10000, loanAmount: 6800, status: "正常" },
    { id: 4, name: "某小贷公司A", type: "小贷公司", level: "普通合作", products: 2, pushCount: 5000, loanAmount: 1200, status: "正常" },
    { id: 5, name: "某小贷公司B", type: "小贷公司", level: "普通合作", products: 1, pushCount: 3000, loanAmount: 800, status: "暂停" }
];

// 产品线
const products = [
    { id: 1, institutionId: 1, name: "科技贷", type: "信用贷", minScore: 750, maxAmount: 500, rate: "4.5%-5.5%", pushCount: 5000, conversionRate: 4.2 },
    { id: 2, institutionId: 1, name: "税e融", type: "信用贷", minScore: 700, maxAmount: 300, rate: "5.0%-6.0%", pushCount: 4000, conversionRate: 3.8 },
    { id: 3, institutionId: 2, name: "园区贷", type: "抵押贷", minScore: 680, maxAmount: 1000, rate: "5.5%-6.5%", pushCount: 3500, conversionRate: 3.2 },
    { id: 4, institutionId: 3, name: "专精特新贷", type: "信用贷", minScore: 720, maxAmount: 800, rate: "4.8%-5.8%", pushCount: 4500, conversionRate: 4.0 }
];

// 获客规则
const rules = [
    { id: 1, productId: 1, name: "规则A-高新科技", conditions: "高新技术企业+苏信分≥750+专利≥5", pushCount: 3200, conversionRate: 4.2, status: "运行中" },
    { id: 2, productId: 1, name: "规则B-专精特新", conditions: "专精特新认定+营收≥2000万", pushCount: 2800, conversionRate: 3.8, status: "运行中" },
    { id: 3, productId: 2, name: "规则C-纳税大户", conditions: "年纳税≥100万+无司法案件", pushCount: 2500, conversionRate: 3.5, status: "运行中" },
    { id: 4, productId: 3, name: "规则D-园区企业", conditions: "苏州工业园区+制造业", pushCount: 3000, conversionRate: 3.1, status: "暂停" }
];

// 平台统计
const platformStats = {
    totalCustomers: 14000000,
    authorizedCustomers: 2000000,
    totalInstitutions: 15,
    activeProducts: 28,
    monthlyPush: 85000,
    monthlyLoan: 25800,
    overallConversion: 3.6
};

// 据量池数据
const rejectedPool = [
    { id: 1, companyName: "徐州绿色建材集团有限公司", rejectReason: "资产负债率过高", rejectDate: "2026-01-20", coolingDays: 16, matchedInstitutions: 2 },
    { id: 2, companyName: "泰州健康食品有限公司", rejectReason: "行业限制", rejectDate: "2026-01-25", coolingDays: 11, matchedInstitutions: 1 },
    { id: 3, companyName: "盐城化工有限公司", rejectReason: "环保风险", rejectDate: "2026-01-28", coolingDays: 8, matchedInstitutions: 0 }
];

// 机构转化漏斗
const institutionFunnel = {
    "江苏银行": { push: 12000, contact: 7800, interest: 2600, apply: 1100, credit: 680, loan: 504 },
    "苏州农商行": { push: 8000, contact: 4800, interest: 1500, apply: 620, credit: 380, loan: 252 },
    "南京银行": { push: 10000, contact: 6200, interest: 2000, apply: 820, credit: 510, loan: 380 }
};
