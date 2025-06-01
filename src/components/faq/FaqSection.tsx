import React from 'react';

const FaqSection = () => {
    return (
        <section className="bd-faq__area pt-115 pb-95">
            <div className="container small-container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="bd-faq__wrapper mb-30">
                            <div
                                className="bd-faq__accordion"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Làm thế nào để mua một sản phẩm?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chúng tôi cam kết mang đến thông tin rõ ràng,
                                                    chính xác và đáng tin cậy về từng sản phẩm cây
                                                    xanh bạn chọn.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Tôi là người dùng mới. Tôi nên bắt đầu như thế nào?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chào mừng bạn đến với cửa hàng kit trồng cây của
                                                    chúng tôi! Nếu bạn là người mới bắt đầu hành
                                                    trình làm vườn, đừng lo — chúng tôi ở đây để
                                                    giúp bạn từng bước.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Đổi trả và hoàn tiền
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chúng tôi luôn mong muốn bạn hài lòng với sản
                                                    phẩm kit trồng cây của mình. Tuy nhiên, nếu có
                                                    vấn đề xảy ra, bạn hoàn toàn có thể yêu cầu đổi
                                                    trả hoặc hoàn tiền theo chính sách
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                Thông tin của tôi có được bảo mật không?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chúng tôi cam kết bảo vệ tuyệt đối thông tin cá
                                                    nhân của bạn. Khi mua kit trồng cây tại website
                                                    của chúng tôi, mọi dữ liệu cá nhân như tên, địa
                                                    chỉ, số điện thoại và thông tin thanh toán đều
                                                    được xử lý an toàn và bảo mật theo tiêu chuẩn
                                                    cao nhất.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                Mã khuyến mãi không áp dụng được
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chúng tôi hiểu việc mã khuyến mãi không sử dụng
                                                    được có thể gây khó chịu, nếu có vấn đề bạn hãy
                                                    gọi ngay đến đường dây nóng để có thể được hỗ
                                                    trợ sớm nhất nhé!
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSix">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="true"
                                                aria-controls="collapseSix"
                                            >
                                                Tôi thanh toán bằng thẻ tín dụng như thế nào?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSix"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Bạn chỉ cần chọn sản phẩm, vào phần thanh toán,
                                                    chọn phương thức thẻ tín dụng và nhập thông tin
                                                    thẻ nhé
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="bd-faq__wrapper-2 mb-30">
                            <div
                                className="bd-faq__accordion"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <div className="accordion" id="accordionExample2">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingSeven">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven"
                                                aria-expanded="false"
                                                aria-controls="collapseSeven"
                                            >
                                                Tại sao bạn nên chọn dịch vụ của chúng tôi?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseSeven"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSeven"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chúng tôi không chỉ bán kit trồng cây – chúng
                                                    tôi mang đến cho bạn trải nghiệm làm vườn đơn
                                                    giản, thú vị và hiệu quả, dù bạn là người mới
                                                    bắt đầu hay đã có kinh nghiệm.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEight">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEight"
                                                aria-expanded="false"
                                                aria-controls="collapseEight"
                                            >
                                                Chúng tôi sẽ nhận được bao nhiêu cây?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseEight"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingEight"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Mỗi kit trồng cây của chúng tôi đều được thiết
                                                    kế để bạn có thể trồng thành công số lượng cây
                                                    như cam kết, giúp bạn tận hưởng niềm vui làm
                                                    vườn ngay tại nhà.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingNine">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseNine"
                                                aria-expanded="false"
                                                aria-controls="collapseNine"
                                            >
                                                Chúng tôi có thể nhận dịch vụ bảo trì không?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseNine"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingNine"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Hiện tại, chúng tôi chuyên cung cấp các bộ kit
                                                    trồng cây kèm hướng dẫn chi tiết để bạn có thể
                                                    tự chăm sóc cây tại nhà một cách dễ dàng. Tuy
                                                    chưa có dịch vụ bảo trì cây trực tiếp, nhưng bạn
                                                    luôn được hỗ trợ tận tình qua các buổi workshop
                                                    trực tuyến và cộng đồng yêu cây giàu kinh
                                                    nghiệm.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTen">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTen"
                                                aria-expanded="false"
                                                aria-controls="collapseTen"
                                            >
                                                Dịch vụ này có giá bao nhiêu?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTen"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTen"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Hãy đến cửa hàng của chúng tôi, bạn sẽ nhận được
                                                    sự chăm sóc và tư vấn thật chu đáo từ nhân viên
                                                    của chúng tôi nhé
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingEleven">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEleven"
                                                aria-expanded="false"
                                                aria-controls="collapseEleven"
                                            >
                                                Làm thế nào để chăm sóc cây sau khi nhận kit?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseEleven"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingEleven"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Sau khi nhận được kit trồng cây, bạn chỉ cần làm
                                                    theo hướng dẫn đính kèm trong hộp. Chúng tôi
                                                    khuyên bạn nên đặt cây ở nơi có đủ ánh sáng,
                                                    tưới nước đều đặn và theo dõi sự phát triển của
                                                    cây mỗi ngày. Nếu có thắc mắc, bạn có thể tham
                                                    gia các workshop trực tuyến hoặc liên hệ với đội
                                                    ngũ hỗ trợ của chúng tôi để được giúp đỡ.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwelve">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwelve"
                                                aria-expanded="false"
                                                aria-controls="collapseTwelve"
                                            >
                                                Có những loại cây nào trong các bộ kit của bạn?
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwelve"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwelve"
                                            data-bs-parent="#accordionExample2"
                                        >
                                            <div className="accordion-body">
                                                <p>
                                                    Chúng tôi cung cấp nhiều loại kit với các hạt
                                                    giống đa dạng, từ rau thơm, cây cảnh nhỏ đến hoa
                                                    và cây thảo dược. Mỗi bộ kit được thiết kế riêng
                                                    phù hợp với nhu cầu và không gian của bạn, giúp
                                                    bạn dễ dàng chọn lựa và bắt đầu hành trình trồng
                                                    cây ngay tại nhà.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
