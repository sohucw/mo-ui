import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 mo-ui 组件库</h1>
        <p>mo-ui是仿照Ant Design的组件库</p>
        <h3>安装试试</h3>
        <code>
          npm install mo-ui --save
        </code>
      </>
    )
  }, { info : { disable: true }})