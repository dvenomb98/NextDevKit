"use client"
import React, { FC } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { Button, buttonVariants } from '../ui/Button';
import { Form, Formik } from 'formik';
import useFieldValidation from '@/hooks/useValidation';
import { useToast } from '@/hooks/useToast';
import * as yup from 'yup';
import { Input } from '../ui/form/Input';
import DatePicker from '../ui/form/DatePicker';
import SelectInput from '../ui/form/select/Select';
import { Switch } from '../ui/form/Switch';
import { Checkbox } from '../ui/form/Checkbox';
import { Skeleton } from '../ui/Skeleton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/Dialog';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/Sheet';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/Popover';
import { InfoIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const selectOptions = [
  {
    value: 'dark',
    label: 'Dark',
  },
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
];

const OverviewComponents: FC = () => {
  const yupField = useFieldValidation();
  const { toast } = useToast();

  const validSchema = yup.object().shape({
    testInput: yupField.string.required,
    terms: yupField.checkbox.required,
    airplane: yupField.checkbox.required,
    select: yupField.select.required(selectOptions),
    date: yupField.date.required,
  });

  return (
    <section className='flex flex-col gap-10'>
      <div>
        <h2 className="h2">Beatiful UI Components</h2>
        <p className="h4 text-muted-foreground">Built with Shadcn-UI and Tailwind</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-1 gap-5">
        {/* buttons  */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-5">
            <Button variant="default">Default</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button loading>Loading</Button>
          </CardContent>
        </Card>
        {/* form*/}
        <Card>
          <CardHeader>
            <CardTitle>Form</CardTitle>
            <CardDescription>Built on the Formik and Yup</CardDescription>
          </CardHeader>

          <CardContent>
            <Formik
              initialValues={{
                testInput: '',
                terms: false,
                airplane: false,
                select: '',
                date: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  console.log(values), setSubmitting(false);
                }, 500);
              }}
              validationSchema={validSchema}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-6">
                  <div className="flex flex-col gap-5">
                    <Input name="testInput" placeholder="Bílek" label="Name" />
                    <DatePicker label="Date of birth" name="date" />
                    <SelectInput
                      name="select"
                      options={selectOptions}
                      placeholder="Choose prefered theme"
                      label="Theme"
                    />
                  </div>
                  <Switch name="airplane" label="Airplane mode" />

                  <Checkbox
                    name="terms"
                    label="Accept terms and conditions"
                    description="You agree to our Terms of Service and Privacy Policy."
                  />

                  <Button type="submit" className="w-full" loading={isSubmitting}>
                    Validate
                  </Button>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
        {/* skeletons */}
        <Card>
          <CardHeader>
            <CardTitle>Skeleton</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <Skeleton className="h-20 aspect-square rounded-full " />
              <div className="flex flex-col w-full gap-2">
                <Skeleton className="w-full h-10" />
                <Skeleton className="w-full h-10" />
              </div>
            </div>

            <Skeleton className="w-full h-40" />
          </CardContent>
        </Card>
        {/* overlays */}
        <Card>
          <CardHeader>
            <CardTitle>Overlays</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Dialog>
              <DialogTrigger className={buttonVariants({ variant: 'outline' })}>
                Open dialog
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                  <DialogDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </DialogDescription>
                </DialogHeader>

                <Button className="w-full">Delete account</Button>
              </DialogContent>
            </Dialog>

            <Sheet>
              <SheetTrigger className={buttonVariants({ variant: 'outline' })}>
                Open sheet
              </SheetTrigger>
              <SheetContent className="max-w-[400px]">
                <SheetHeader>
                  <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account and
                    remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Popover>
              <PopoverTrigger>
                <div className={cn(buttonVariants({ variant: 'outline' }), 'w-full')}>
                  <InfoIcon className="w-5 h-5  mr-2" />
                  <span>More information</span>
                </div>
              </PopoverTrigger>
              <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
            <Button
              variant="destructive"
              onClick={() =>
                toast({
                  title: 'Ups. Something went wrong',
                  description: 'Try it again later please',
                  variant: 'destructive',
                })
              }
            >
              Toast destructive
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                toast({
                  title: 'Scheduled: Catch up',
                  description: 'Friday, February 10, 2023 at 5:57 PM',
                });
              }}
            >
              Toast default
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OverviewComponents;
