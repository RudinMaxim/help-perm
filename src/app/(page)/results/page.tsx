import { MAIN_PHONE_NUMBER } from '@/constants/phone';
import { stories } from '@/constants/stories';
import { ContactUs, Results } from "../(home)/module";

export default function selfhelp() {
  return (
    <main>
      <Results stories={stories} />

      <ContactUs title="Свяжитесь с нами" phone={MAIN_PHONE_NUMBER} />
    </main>
  );
}
