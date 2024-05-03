import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {BoldButton, UnderlineButton, ItalicButton, TextArea} from './styled'

import './index.css'

class TextEditor extends Component {
  state = {userText: '', isBold: false, isItalic: false, isUnderLined: false}

  makeBold = () => {
    this.setState(prev => ({isBold: !prev.isBold}))
  }

  makeItalic = () => {
    this.setState(prev => ({isItalic: !prev.isItalic}))
  }

  makeUnderLine = () => {
    this.setState(prev => ({isUnderLined: !prev.isUnderLined}))
  }

  getTextFromUser = event => {
    this.setState({userText: event.target.value})
  }

  render() {
    const {userText, isBold, isItalic, isUnderLined} = this.state

    return (
      <div className="text-editor-container">
        <div className="sub-container">
          <div className="image-container">
            <h1 className="text-editor-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>

          <div className="editor-container">
            <ul>
              <li>
                <BoldButton
                  data-testid="bold"
                  className="button"
                  isBold={isBold}
                  type="button"
                  onClick={this.makeBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </li>
              <li>
                <ItalicButton
                  className="button"
                  data-testid="italic"
                  type="button"
                  isItalic={isItalic}
                  onClick={this.makeItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  className="button"
                  data-testid="underline"
                  type="button"
                  isUnderLined={isUnderLined}
                  onClick={this.makeUnderLine}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ul>

            <hr />

            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderLined={isUnderLined}
              onChange={this.getTextFromUser}
              className="text-area"
            >
              {userText}
            </TextArea>
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
