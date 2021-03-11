import React from 'react';
import { shallow } from 'enzyme';
import { axe } from 'jest-axe';
import EditorContent from './index';

describe('<EditorContent /> component', () => {
  it('passes aXe accessibility checks', async () => {
    const component = shallow(<EditorContent />).html();

    expect(await axe(component)).toHaveNoViolations();
  });

  it('wraps the children in an additional element if the wrapper property is set', () => {
    const component = shallow((
      <EditorContent
        wrapper="figcaption"
      >
        <div>Some content</div>
      </EditorContent>
    ));

    expect(component.html()).toEqual('<div class="editor-content"><figcaption><div>Some content</div></figcaption></div>');
  });

  it('passes the className to the editor-content wrapper if set', () => {
    const component = shallow((
      <EditorContent
        className="my-wrap"
      >
        <div>Some content</div>
      </EditorContent>
    ));

    expect(component.html()).toEqual('<div class="editor-content my-wrap"><div>Some content</div></div>');
  });

  it('converts children to a node if children is a string', () => {
    const component = shallow((
      <EditorContent>
        {'<p>Some content</p>'}
      </EditorContent>
    ));

    expect(component.html()).toEqual('<div class="editor-content"><p>Some content</p></div>');
  });

  it.each(['', null, undefined])('handles "%s" correctly', (content) => {
    const component = shallow((
      <EditorContent>
        {content}
      </EditorContent>
    ));

    expect(component.html()).toEqual('<div class="editor-content"></div>');
  });
});
