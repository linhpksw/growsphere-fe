
import Breadcrumb from "@/components/common/breadcrumb/Breadcrumb";
import ShopMain from "@/components/shop/ShopMain";
import Wrapper from "@/layout/DefaultWrapper";

const Shop = () => {
    return (
        <>
            <Wrapper>
                <main>
                    <Breadcrumb breadHome="Trang chủ" breadMenu="Cửa hàng"/>
                    <ShopMain />
                </main>
            </Wrapper>
        </>
    );
}

export default Shop