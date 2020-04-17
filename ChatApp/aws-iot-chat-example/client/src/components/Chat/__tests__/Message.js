/*
  Copyright 2017-2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except
  in compliance with the License. A copy of the License is located at

      http://aws.amazon.com/apache2.0/

  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
  specific language governing permissions and limitations under the License.
*/

import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Message from '../Message';

describe('Message', () => {
  const message = { id: 0, author: 'bob', time: moment(), text: 'msg1' };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Message {...message} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
});
