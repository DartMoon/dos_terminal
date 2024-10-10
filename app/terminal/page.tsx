import ContentTabs from '@/app/components/content-tabs';
import InputField from '@/app/components/fields/input-field';

const TerminalPage = () => {
  return (
    <>
      <section className="flex flex-grow">
        <ContentTabs />
        <ContentTabs />
      </section>
      <div className="mt-auto">
        <InputField />
      </div>
    </>
  );
};

export default TerminalPage;
