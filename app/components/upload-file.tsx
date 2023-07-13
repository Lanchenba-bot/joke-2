import { useState, useRef, useEffect } from "react";
// import { Dashboard } from "@uppy/react";

const getEnv = process.env.NEXT_PUBLIC_UPPY_TUS_ENDPOINT;

const useClientUppy = ({ destinations} ) => {
  const [uppy, setUppy] = useState(null);
  const DashboardModalRef = useRef(null);

  useEffect(() => {
    const execute = async () => {
      const { Dashboard } = await import("@uppy/react");
      const Uppy = (await import("@uppy/core")).default;
      const Tus = (await import("@uppy/tus")).default;

      const uppy = new Uppy({
        debug: true,
        autoProceed: false,
        restrictions: {
          maxNumberOfFiles: 1,
        },
      });

      if (destinations.includes("tus")) {
        uppy.use(Tus, {
          endpoint: getEnv,
        });
      }
      DashboardModalRef.current = Dashboard;
      setUppy(uppy);
    };
    execute();
  }, []);

  const Dashboard = DashboardModalRef.current;
  return { uppy, Dashboard };
};

// const StaticDisabledButton = ({ buttonProps, label }) => {
//   return (
//     <button disabled={true} {...buttonProps}>
//       {label}
//     </button>
//   );
// };

export const UploadFile = ({
  button: { label: buttonLabel = "Upload", props: buttonProps = {} } = {},
  destinations = ["tus"],
  onComplete = () => {},
  ...forwardedProps
}) => {
  const { uppy, Dashboard } = useClientUppy({ destinations });
  const [open, setOpen] = useState(false);

  // if (!uppy || !DashboardModal) {
  //   return (
  //     <StaticDisabledButton buttonProps={buttonProps} label={buttonLabel} />
  //   );
  // }

  return (
    <div>
      <button onClick={() => setOpen(!open)} {...buttonProps}>
        {buttonLabel}
      </button>{
        Dashboard && <Dashboard
        uppy={uppy}
        showProgressDetails={true}
        waitForThumbnailsBeforeUpload={true}
      />
      }
      
      hiii
    </div>
  );
};

export default UploadFile;
