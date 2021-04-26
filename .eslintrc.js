module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint/eslint-plugin'
  ],
  'extends': [
    'alloy',
    'alloy/react',
    'alloy/typescript'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'env': {
    // 您的环境变量（包含多个预定义的全局变量）
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  'globals': {
    // 您的全局变量（设置为 false 表示它不允许被重新赋值）
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
    'document': true,
    'localStorage': true,
    'window': true
  },
  'rules': {
    // 自定义您的规则
    // Customize your rules
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'semi': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 2, // 检查 effect 的依赖
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'no-use-before-define': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/button-has-type': 0,
    'no-useless-escape': 2,
    'eqeqeq': ['warn', 'smart'], // require the use of `===` and `!==`
    'prefer-const': 0, // 首选const
    'quotes': [2, 'single'],   // 单引号
    'no-console': 0,           // 不禁用console
    'no-debugger': 2,          // 禁用debugger
    'no-control-regex': 2,     // 禁止在正则表达式中使用控制字符 ：new RegExp("\x1f")
    // 'linebreak-style': [0, 'error', 'windows'],            // 强制使用一致的换行风格
    'indent': ['error', 2, { 'SwitchCase': 2 }],           // 空格2个
    'array-bracket-spacing': [2, 'never'],                 // 指定数组的元素之间要以空格隔开(,后面)
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }], // if while function 后面的{必须与if在同一行，java风格。
    'no-irregular-whitespace': 0,      // 不规则的空白不允许
    'no-trailing-spaces': 1,           // 一行结束后面有空格就发出警告
    'eol-last': 0,                     // 文件以单一的换行符结束
    'no-unused-vars': [1, { 'vars': 'all', 'args': 'after-used' }], // 不能有声明后未被使用的变量或参数
    'no-underscore-dangle': 0,     // 标识符不能以_开头或结尾
    'no-alert': 2,                 // 禁止使用alert confirm prompt
    'no-lone-blocks': 0,           // 禁止不必要的嵌套块
    'no-class-assign': 2,          // 禁止给类赋值
    'no-floating-decimal': 2,      // 禁止数字字面量中使用前导和末尾小数点
    'no-loop-func': 1,              // 禁止在循环中出现 function 声明和表达式
    'no-cond-assign': 2,           // 禁止在条件表达式中使用赋值语句
    'no-delete-var': 2,            // 不能对var声明的变量使用delete操作符
    'no-dupe-keys': 2,             // 在创建对象字面量时不允许键重复
    'no-duplicate-case': 2,        // switch中的case标签不能重复
    'no-dupe-args': 2,             // 函数参数不能重复
    'no-empty': 2,                 // 块语句中的内容不能为空
    'no-func-assign': 2,           // 禁止重复的函数声明
    'no-invalid-this': 0,          // 禁止无效的this，只能用在构造器，类，对象字面量
    'no-redeclare': 2,             // 禁止重复声明变量
    'no-spaced-func': 2,           // 函数调用时 函数名与()之间不能有空格
    'no-this-before-super': 0,     // 在调用super()之前不能使用this或super
    'no-undef': 1,                 // 不能有未定义的变量
    'jsx-quotes': [2, 'prefer-double'],    // 强制在JSX属性（jsx-quotes）中一致使用双引号
    'react/display-name': 0,               // 防止在React组件定义中丢失displayName
    'react/forbid-prop-types': [2, {'forbid': ['any']}],   // 禁止某些propTypes
    'react/jsx-boolean-value': 2,          // 在JSX中强制布尔属性符号
    'react/jsx-closing-bracket-location': 1,               // 在JSX中验证右括号位置
    'react/jsx-curly-spacing': [2, {'when': 'never', 'children': true}], // 在JSX属性和表达式中加强或禁止大括号内的空格。
    'react/jsx-indent-props': [2, 4],      // 验证JSX中的props缩进
    'react/jsx-key': 2,                    // 在数组或迭代器中验证JSX具有key属性
    'react/jsx-no-bind': 0,                // JSX中不允许使用箭头函数和bind
    'react/jsx-no-duplicate-props': 2,     // 防止在JSX中重复的props
    'react/jsx-no-literals': 0,            // 防止使用未包装的JSX字符串
    'react/jsx-no-undef': 1,               // 在JSX中禁止未声明的变量
    'react/jsx-pascal-case': 0,            // 为用户定义的JSX组件强制使用PascalCase
    'react/jsx-uses-react': 1,             // 防止反应被错误地标记为未使用
    'react/jsx-uses-vars': 2,              // 防止在JSX中使用的变量被错误地标记为未使用
    'react/no-danger': 0,                  // 防止使用危险的JSX属性
    'react/no-did-mount-set-state': 0,     // 防止在componentDidMount中使用setState
    'react/no-did-update-set-state': 1,    // 防止在componentDidUpdate中使用setState
    'react/no-direct-mutation-state': 2,   // 防止this.state的直接变异
    'react/no-set-state': 0,               // 防止使用setState
    'react/no-unknown-property': 2,        // 防止使用未知的DOM属性
    'react/prefer-es6-class': 2,           // 为React组件强制执行ES5或ES6类
    'react/react-in-jsx-scope': 2,         // 使用JSX时防止丢失React
    'react/self-closing-comp': 0,          // 防止没有children的组件的额外结束标签
    'react/sort-comp': 1,                  // 强制组件方法顺序
    'no-extra-boolean-cast': 0,            // 禁止不必要的bool转换
    'react/no-array-index-key': 0,         // 防止在数组中遍历中使用数组key做索引
    'react/no-deprecated': 1,              // 不使用弃用的方法
    'react/jsx-equals-spacing': 2,         // 在JSX属性中强制或禁止等号周围的空格
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', 'tsx'] }],    // 允许在 .js 和 .jsx 文件中使用  jsx
    'no-unreachable': 1,                   // 不能有无法执行的代码
    'comma-dangle': 2,                     // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号
    'comma-spacing': [2, {'before': false, 'after': true}],  // 控制逗号前后的空格
    'no-mixed-spaces-and-tabs': 0,         // 禁止混用tab和空格
    'prefer-arrow-callback': 0,           // 比较喜欢箭头回调
    'space-before-function-paren': 0 // 在函数左括号的前面是否有空
  }
};