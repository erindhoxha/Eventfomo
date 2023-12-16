import { Button } from '@/components/ui/button';
import { Meta } from '@storybook/react';

export default {
 component: Button,
} as Meta;

export const Story = {
 title: 'Components/Button',
 component: Button,
 args: {
  children: 'Button',
  variant: 'default',
  size: 'default',
  disabled: false,
  asChild: false,
  className: '',
  type: 'button',
 },
};

const Sc = (props: any) => (
 <div className="flex flex-col max-w-xs space-y-2 space-x-2">
  <Button children="I am a primary button" {...props} />
  <Button children="I am an outline button" {...props} variant="outline" />
  <Button children="I am a ghost button" {...props} variant="ghost" />
  <Button children="I am a link button" {...props} variant="link" />
  <Button children="I am a plain button" {...props} variant="none" />
  <Button
   children="I am a destructive button"
   {...props}
   variant="destructive"
  />
  <Button children="I am a success button" {...props} variant="success" />
  <Button children="I am a disabled button" {...props} variant="disabled" />
 </div>
);

export const Showcase = Sc.bind({});
