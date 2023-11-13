'use client';
import { Button, buttonVariants } from '@/components/ui/Button';
import { Formik, Form } from 'formik';
import { Input } from '@/components/ui/form/Input';
import useFieldValidation from '@/hooks/useValidation';
import * as yup from 'yup';
import { Checkbox } from '@/components/ui/form/Checkbox';
import { Switch } from '@/components/ui/form/Switch';
import SelectInput from '@/components/ui/form/select/Select';
import { Skeleton } from '@/components/ui/Skeleton';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { InfoIcon, User2Icon } from 'lucide-react';
import DatePicker from '@/components/ui/form/DatePicker';
import { useToast } from '@/hooks/useToast';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/Sheet';
import siteMetada from '@/data/siteMetadata';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

// IMPORTANT !!!
//
//
// This page is for informational purposes only. To begin development, remove the page content
//
//
//


const selectOptions = [
  {
    value: 'dark',
    label: 'Dark',
  },
  { value: 'light', label: 'Light' },
  { value: 'system', label: 'System' },
];

const Home = () => {
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
    <main className="page-container min-h-screen">
      {/* INTRO  */}
      <section className="flex flex-col items-center justify-center gap-5">
        <a
          href="https://danielbilek.com"
          target="_blank"
          className="flex items-center border rounded-full px-10 py-2 gap-x-2 "
        >
          <User2Icon className="w-5 h-5 fill-primary" />
          <p>
            Created by <span className="font-bold">{siteMetada.author}</span>
          </p>
        </a>
        <div className="text-center items-center flex flex-col gap-4">
          <h1 className="h1">Next developer kit</h1>
          <p className="h4 text-muted-foreground">
            NextDevKit: The Ultimate NextJS Starter App for Efficient Development
          </p>
          <Button size={'lg'} className="w-fit">
            View on Github
          </Button>
        </div>
      </section>

      <section className="flex flex-col gap-10">
        {/* COMPONENTS */}
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
          {/* form*/ }
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
                <DialogTrigger className={buttonVariants({variant: "outline"})}>Open dialog</DialogTrigger>
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
                <SheetTrigger className={buttonVariants({variant: "outline"})}>Open sheet</SheetTrigger>
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
                  <div className={cn(buttonVariants({variant: "outline"}), "w-full")}>
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

      <section className='flex flex-col gap-10'>
        {/* UTILS */}
        <div>
          <h2 className="h2">Scalable utils and settings to save you time</h2>
          <p className="h4 text-muted-foreground">Don't repeat yourself over and over again. Use what works over and over again.</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-1 gap-5'>
          <Card>
            <CardHeader>
              <CardTitle>Utils</CardTitle>
            </CardHeader>
            <CardContent className='grid grid-cols-1 text-muted-foreground '>
              <p><span className='text-foreground'>genPageMetaData()</span> - Generate metadata</p>
              <p><span className='text-foreground'>cn()</span> - Merge classnames</p>
              <p><span className='text-foreground'>cva()</span> - Build amazing components variants</p>
              <p><span className='text-foreground'>useValidation()</span> - Validate your form</p>
              <p><span className='text-foreground'>useToast()</span> - Call your toasts</p>
            </CardContent>
          </Card>

        </div>

      </section>

      {/* DIALOG  */}
    </main>
  );
};

export default Home;
