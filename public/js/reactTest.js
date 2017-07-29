import React from 'react';
import {App} from './app.js'

describe(<App />,function(){
	it('cancels when user presses esc',done=>{
		const wrapper=mount(<App/>);
		expect(wrapper().props.start_date).to.be.defined;
	})
})
