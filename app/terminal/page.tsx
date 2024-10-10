import ContentTabs from '@/app/components/content-tabs';
import InputField from '@/app/components/fields/input-field';

const TerminalPage = () => {
  return (
    <>
      <section className="flex flex-grow">
        <ContentTabs />
        <ContentTabs />
      </section>
      <form className="mt-auto">
        <InputField />
      </form>
    </>
  );
};

export default TerminalPage;
