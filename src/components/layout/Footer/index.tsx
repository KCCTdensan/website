import { component$ } from "@builder.io/qwik";
import { GithubIcon, TwitterIcon } from "lucide-qwik";

import Copyright from "./components/Copyright";
import SmallIcon from "./components/SmallIcon";
import { FooterWrapper, IconLinks } from "./style.css";

export default component$(() => (
  <FooterWrapper>
    {/* left */}
    <div></div>

    {/* center */}
    <div>
      <IconLinks>
        <SmallIcon href="https://github.com/KCCTdensan">
          {/* TODO:なぜか@qwikest/iconsのコンポーネントが使えないので、lucide-qwikで間に合わせている
              頃合いを見て元に戻す
          */}
          <GithubIcon />
        </SmallIcon>
        <SmallIcon href="https://twitter.com/intent/user?user_id=444436310">
          <TwitterIcon />
        </SmallIcon>
      </IconLinks>
      <Copyright />
    </div>

    {/* right */}
    <div></div>
  </FooterWrapper>
));
