import React, { FC } from 'react';

const OverviewUtils: FC = () => {
  return (
    <section className="flex flex-col gap-10">
      {/* UTILS */}
      <div>
        <h2 className="h2">Scalable utils, hooks to save you time</h2>
        <p className="h4 text-muted-foreground">
          Do not relieat yourself over and over again. Use what works over and over again.
        </p>
      </div>

      <ul className="flex flex-col gap-5 text-muted-foreground">
       
            <li>
              <span className="text-foreground h4">genPageMetaData()</span> - Generate metadata
            </li>
            <li>
              <span className="text-foreground h4">cn()</span> - Merge classnames
            </li>
            <li>
              <span className="text-foreground h4">cva()</span> - Build amazing components variants
            </li>
            <li>
              <span className="text-foreground h4">useValidation()</span> - Validate your form
            </li>
            <li>
              <span className="text-foreground h4">useToast()</span> - Call your toasts
            </li>
            <li>
              <span className="text-foreground h4">fetcher()</span> - Use to fetch your external data with prepared error handling
            </li>
        
      </ul>
    </section>
  );
};

export default OverviewUtils;
