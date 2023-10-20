'use client';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import { Button } from '@/components/ui/Button';
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
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { InfoIcon } from 'lucide-react';
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
      <section>
        <h3 className="h3">Template</h3>
        <p className="text-secondary-color">Created by Daniel Bílek</p>
        <p className="text-secondary-color">v0.1</p>
        <ThemeSwitcher />
      </section>

      {/* BUTTONS  */}
      <section>
        <h4 className="py-4">Buttons - default size</h4>
        <div className="grid grid-cols-3 grid-rows-auto gap-4">
          <Button variant="default">Default</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button loading>Loading</Button>
        </div>
      </section>

      {/* FORM */}
      <section>
        <h4 className="py-4">Form</h4>
        <Formik
          initialValues={{ testInput: '', terms: false, airplane: false, select: '', date: '' }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values), setSubmitting(false);
            }, 500);
          }}
          validationSchema={validSchema}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-6">
              <div className="grid grid-cols-2 grid-rows-auto sm:grid-cols-1 gap-6">
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

              <Button type="submit" className="lg:w-96" loading={isSubmitting}>
                Validate
              </Button>
            </Form>
          )}
        </Formik>
      </section>

      {/* SKELETON */}

      <section>
        <h4 className="py-4">Skeleton</h4>
        <div className="flex items-center gap-5">
          <Skeleton className="h-20 aspect-square rounded-full " />
          <div className="flex flex-col w-full gap-2">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        </div>
      </section>

      {/* DIALOG  */}

      <section>
        <h4 className="py-4">Dialog</h4>
        <Dialog>
          <DialogTrigger>Open dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button>Delete account</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Sheet  */}
      <section>
        <h4 className="py-4">Sheet</h4>
        <Sheet>
          <SheetTrigger>Open</SheetTrigger>
          <SheetContent className="max-w-[400px]">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </section>

      {/* POPOVER */}
      <section>
        <h4 className="py-4">Popover</h4>
        <Popover>
          <PopoverTrigger>
            <div className="flex gap-2 items-center  text-info-dark">
              <InfoIcon className="w-5 h-5 text-info-dark" />
              More information
            </div>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </section>

      {/* TOAST */}
      <section>
        <h4 className="py-4">Toast</h4>
        <Button
          variant="ghost"
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
          variant="ghost"
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
            });
          }}
        >
          Toast default
        </Button>
        <Button
          variant="ghost"
          onClick={() => {
            toast({
              title: 'Scheduled: Catch up',
              description: 'Friday, February 10, 2023 at 5:57 PM',
              variant: 'success',
            });
          }}
        >
          Toast success
        </Button>
      </section>
    </main>
  );
};

export default Home;
