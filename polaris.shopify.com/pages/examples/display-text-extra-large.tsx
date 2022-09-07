import {DisplayText} from '@shopify/polaris';
import React from 'react';
import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function DisplayExample() {
  return <DisplayText size="extraLarge">Good evening, Dominic.</DisplayText>;
}

export default withPolarisExample(DisplayExample);