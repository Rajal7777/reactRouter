import { useFetcher} from "react-router-dom";
import { useEffect } from "react";

import classes from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <fetcher.Form method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up"
        aria-label="Sign up for newsLetter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}
