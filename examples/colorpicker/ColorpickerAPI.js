const ColorpickerAPI = {
  props: [
    {
      name: 'label',
      type: 'String',
      default: '',
      description: 'Defines the Label of the Colorpicker Element',
    },
    {
      name: 'palette',
      type: 'Boolean',
      default: 'false',
      description: 'Color picker with a custom palette',
    },
    {
      name: 'colors',
      type: 'Array',
      default: "['#607C8A', '#008080', '#00FF7F', ... ,]",
      description: 'Array of 16 hex codes of colors for the color palette',
    },
    {
      name: 'block',
      type: 'Boolean',
      default: 'false',
      description: 'Independent color picker block (without input)',
    },
    //     {
    //         name: 'inputId',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'name',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'disabled',
    //         type: 'Boolean',
    //         default: 'false',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'dense',
    //         type: 'Boolean',
    //         default: 'false',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'label',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'icon',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    //     {
    //         name: 'checked-icon',
    //         type: 'String',
    //         default: '',
    //         description: 'Input element with rounded corners',
    //     },
    // ],
    //   methods: [
    //     {
    //       name: 'input-native',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'input',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'update:modelValue',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'change',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'click',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'focus',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
    //     {
    //       name: 'blur',
    //       params: [
    //         {
    //           name: 'value',
    //           type: 'String',
    //           description: 'Value of the input field, at any time.',
    //         },
    //       ],
    //       description: 'Input element with rounded corners',
    //     },
  ],
};
export default ColorpickerAPI;
