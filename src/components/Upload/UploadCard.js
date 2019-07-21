/** @jsx jsx */
import { useState } from 'react'
import _ from 'lodash'
import { css, jsx } from '@emotion/core'
import {
  Button,
  Card,
  Icon,
  Upload,
} from 'antd'
import colors from 'utils/colors'
import openNotificationWithIcon from 'utils/openNotificationWithIcon'
import Output from 'container/Output'

const { Dragger } = Upload;

const text = {
  "type" : "record",
  "name" : "topLevelRecord",
  "fields" : [ {
    "name" : "event_type",
    "type" : [ "string", "null" ]
  }, {
    "name" : "id",
    "type" : [ "string", "null" ]
  }, {
    "name" : "name",
    "type" : [ "string", "null" ]
  }, {
    "name" : "founded_year",
    "type" : [ "long", "null" ]
  }, {
    "name" : "created_at",
    "type" : [ {
      "type" : "long",
      "logicalType" : "timestamp-micros"
    }, "null" ]
  }, {
    "name" : "updated_at",
    "type" : [ {
      "type" : "long",
      "logicalType" : "timestamp-micros"
    }, "null" ]
  } ]
}


function UploadCard() {
  const [files, setFiles] = useState([])
  const output = Output.useContainer()

  const replaceFile = (f) => {
    if (!_.isEmpty(files)) {
      removeFile()
    }

    setFiles([f])
  }

  const removeFile = () => {
    setFiles([])
  }

  const compile = () => {
    const result = JSON.stringify(text, null, 2)
    output.generateText(result)
    openNotificationWithIcon('success', 'Success!', 'Successfully compiled')
  }

  const onReset = () => {
    setFiles([])
    output.removeText()
  }

  return (
    <Card
      title="Avro | Parquet Upload"
      css={css`
        height: 100vh;
        position: relative;
      `}
      headStyle={{
        color: colors.white,
        background: colors.darkness
      }}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
          text-align: center;
        `}
      >
        <Dragger
          name="file"
          customRequest={data => (
            setTimeout(() => {
              data.onSuccess('ok')
            }, 0)
          )}
          beforeUpload={replaceFile}
          onRemove={removeFile}
          multiple={false}
          fileList={files}
        >
          <p className="ant-upload-drag-icon">
            <Icon type="inbox" />
          </p>
          <p className="ant-upload-text">Click or drag files to zip your files</p>
          <p className="ant-upload-hint">
            Upload support for .avro and .parquet files
          </p>
        </Dragger>
        <Button
          onClick={compile}
          css={css`
            margin-top: 2em;
          `}
          type="primary"
          size="large"
          shape="round"
          disabled={_.isEmpty(files)}
        >
          Compile
        </Button>
        <Button
          css={theme => css`
            background: ${theme.colors.shadow};

            &:focus,
            &:active,
            &:hover {
              background: ${theme.colors.shadow};
              border: 1px solid ${theme.colors.white};
            }
          `}
          size="large"
          shape="round"
          onClick={onReset}
        >
          Reset
        </Button>
      </div>
    </Card>
  )
}

export default UploadCard
