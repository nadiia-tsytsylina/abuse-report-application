export const BASE_URL = 'https://profile.short.io/tmp';

export const DATE_FORMAT = 'dd/MM/yyyy HH:mm';

export const PAGINATION_LIMIT = 8;

export const URL_PATTERN =
  /^(https?):\/\/[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;

export const EMAIL_PATTERN = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const REACT_APP_SECRET_KEY = '6LdO8JcUAAAAAJWQi_B27yDFuShbD2Cvq4AqcOCQ';
export const REACT_APP_SITE_KEY = '6Ld0EWEUAAAAAFSnSvsm-azMwTHMbi5kdw1qmEti';
//я понимаю, что эти данные должны быть в .env, но у меня возникли проблемы с доступом к ним при деплое

export const DEFAULT_FORM_VALUES = {
  abusedURL: '',
  email: '',
  reportType: '',
  spamProof: '',
  targetCountry: '',
  captchaToken: '',
};

export const REPORT_TYPE = {
  social_engineering: 'social_engineering',
  child_abuse: 'child_abuse',
  spam: 'spam',
  illegal_goods: 'illegal_goods',
  malware: 'malware',
  ip_infrigement: 'ip_infrigement',
  gambling: 'gambling',
  hate_speech: 'hate_speech',
  terrorism: 'terrorism',
  i_dont_like_this: 'i_dont_like_this',
};

export const REPORT_TYPE_OPTIONS = [
  {
    label: 'Social Engineering',
    value: REPORT_TYPE.social_engineering,
  },
  {
    label: 'Child Abuse',
    value: REPORT_TYPE.child_abuse,
  },
  {
    label: 'SPAM',
    value: REPORT_TYPE.spam,
  },
  {
    label: 'Illegal Goods and Services',
    value: REPORT_TYPE.illegal_goods,
  },
  {
    label: 'Malicious Software',
    value: REPORT_TYPE.malware,
  },
  {
    label: 'IP Infrigement (DMCA report)',
    value: REPORT_TYPE.ip_infrigement,
  },
  {
    label: 'Gambling, Casino',
    value: REPORT_TYPE.gambling,
  },
  {
    label: 'Hate Speech',
    value: REPORT_TYPE.hate_speech,
  },
  {
    label: 'Terrorism',
    value: REPORT_TYPE.terrorism,
  },
  {
    label: "I don't like this content",
    value: REPORT_TYPE.i_dont_like_this,
  },
];
