import ContentTabs from '@/app/components/content-tabs';
import TerminalForm from '@/app/terminal/feature/form';

const TerminalPage = () => {
  return (
    <>
      <section className="flex flex-grow">
        <ContentTabs />
        <ContentTabs />
      </section>
      <TerminalForm />
    </>
  );
};

export default TerminalPage;
