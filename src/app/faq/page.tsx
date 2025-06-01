
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import FaqMain from "@/components/faq/FaqMain";
import Wrapper from "@/layout/DefaultWrapper";

const Faq = () => {
  return (
    <>
      <Wrapper>
        <main>
        <Breadcrumb breadHome="Trang chủ" breadMenu="Faq"/>
          <FaqMain/>
        </main>
      </Wrapper>
    </>
  );
}

export default Faq