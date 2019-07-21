/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { isEmpty } from 'lodash'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
  Card,
} from 'antd'
import colors from 'utils/colors'
import Output from 'container/Output'

function Markdown(props) {
  const output = Output.useContainer()
  const result = output.text

  return (
    <div>
      <Card
        title="Output"
        css={css`
          height: 100vh;
          position: relative;
        `}
        headStyle={{
          color: colors.white,
          background: colors.darkness
        }}
      >
        {
          !isEmpty(result) &&
          <SyntaxHighlighter language="javascript" style={docco}>
            {result}
          </SyntaxHighlighter>
        }
      </Card>
    </div>
  )
}

export default Markdown
