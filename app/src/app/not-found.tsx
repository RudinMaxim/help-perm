import { getUiContent } from '@/lib/cms';
import NotFoundComp from '@/components/NotFound/NotFound';

export default async function NotFound(): Promise<React.JSX.Element> {
  const ui = await getUiContent();

	return (
    <NotFoundComp
      subtitle={ui?.notFoundSubtitle ?? ''}
      text={ui?.notFoundText ?? ''}
      linkText={ui?.notFoundLinkText ?? ''}
      linkAriaLabel={ui?.notFoundLinkAriaLabel ?? ''}
    />
  );
}
