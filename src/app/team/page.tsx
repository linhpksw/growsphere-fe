
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import TeamMain from "@/components/team/TeamMain";
import Wrapper from "@/layout/DefaultWrapper";

const Team = () => {
  return (
    <>
      <Wrapper>
        <main>
        <Breadcrumb breadHome="Trang chủ" breadMenu="Đội"/>
          <TeamMain/>
        </main>
      </Wrapper>
    </>
  );
}

export default Team