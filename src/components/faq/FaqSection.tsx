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
                                                    Phông chữ web thường gây ảnh hưởng xấu đến hiệu
                                                    suất của trang web, và hầu hết các chiến lược
                                                    tải phông hiện tại đều không thực sự hiệu quả
                                                    trong việc khắc phục vấn đề đó. Tuy nhiên, những
                                                    tùy chọn phông chữ sắp ra mắt có thể sẽ thực sự
                                                    mang lại giải pháp như mong đợi.
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
                                                    Giao diện và thiết kế ngày nay đã trở nên vô
                                                    cùng phức tạp. Vì vậy, chúng tôi mời những người
                                                    thông minh và thân thiện từ cộng đồng cùng tham
                                                    gia các buổi workshop trực tuyến để mọi người có
                                                    thể học hỏi cùng nhau. Và hiện tại, chúng tôi đã
                                                    có những buổi workshop mới.
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
                                                    Việc trồng cây tại nhà có thể trở nên khó khăn
                                                    với người mới bắt đầu. Vì vậy, chúng tôi mời các
                                                    chuyên gia thân thiện và giàu kinh nghiệm trong
                                                    cộng đồng cùng chia sẻ kiến thức qua các buổi
                                                    workshop trực tuyến. Và hiện tại, đã có những
                                                    buổi học mới dành cho bạn!
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
                                                    Trồng cây tại nhà tưởng đơn giản nhưng lại đòi
                                                    hỏi nhiều kiến thức và kỹ thuật. Vì vậy, chúng
                                                    tôi thường xuyên mời những người yêu cây, giàu
                                                    kinh nghiệm trong cộng đồng chia sẻ qua các buổi
                                                    workshop trực tuyến. Hãy cùng nhau học hỏi và
                                                    bắt đầu hành trình xanh! Hiện tại, đã có những
                                                    buổi học mới dành cho bạn.
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
                                                    Có rất nhiều phiên bản nội dung khác nhau, nhưng
                                                    hầu hết đã bị thay đổi, chèn thêm những từ ngẫu
                                                    nhiên khiến nội dung trở nên không thật và khó
                                                    tin.
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
                                                    Phông chữ web thường gây ảnh hưởng tiêu cực đến
                                                    hiệu suất trang web, và hầu hết các chiến lược
                                                    tải phông hiện tại đều chưa thực sự hiệu quả để
                                                    khắc phục vấn đề này. Tuy nhiên, các tùy chọn
                                                    phông chữ sắp tới có thể sẽ mang lại giải pháp
                                                    như kỳ vọng.
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
                                                    Giao diện và thiết kế website hiện nay khá phức
                                                    tạp. Vì vậy, chúng tôi thường mời những người
                                                    yêu cây, giàu kinh nghiệm từ cộng đồng tổ chức
                                                    các buổi workshop trực tuyến để cùng nhau học
                                                    hỏi. Và hiện tại, chúng tôi đã có những buổi
                                                    workshop mới dành cho bạn!
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
                                                    Ngày nay, việc thiết kế giao diện và trải nghiệm
                                                    người dùng ngày càng phức tạp. Vì vậy, chúng tôi
                                                    mời những người yêu cây, giàu kinh nghiệm từ
                                                    cộng đồng tổ chức các buổi workshop trực tuyến
                                                    để cùng nhau học hỏi và phát triển. Và hiện tại,
                                                    chúng tôi đã có những buổi workshop mới dành cho
                                                    bạn!
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
                                                    Hiện nay, thiết kế giao diện và trải nghiệm
                                                    người dùng ngày càng trở nên phức tạp. Vì vậy,
                                                    chúng tôi mời các chuyên gia yêu cây và nhiệt
                                                    huyết trong cộng đồng tổ chức các buổi workshop
                                                    trực tuyến để mọi người cùng học hỏi và phát
                                                    triển. Và hiện tại, chúng tôi đã có những buổi
                                                    workshop mới dành cho bạn!
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
                                                Dịch vụ này giá bao nhiêu?
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
                                                    Ngày nay, thiết kế giao diện và trải nghiệm
                                                    người dùng ngày càng phức tạp hơn. Vì vậy, chúng
                                                    tôi thường xuyên mời những người yêu cây và có
                                                    kinh nghiệm trong cộng đồng tổ chức các buổi
                                                    workshop trực tuyến để cùng nhau học hỏi. Và
                                                    hiện tại, chúng tôi đã có những buổi workshop
                                                    mới dành cho bạn!
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
                                                Dịch vụ này giá bao nhiêu?
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
                                                    Ngày nay, việc thiết kế giao diện và trải nghiệm
                                                    người dùng ngày càng phức tạp. Vì vậy, chúng tôi
                                                    thường xuyên mời những người yêu cây, giàu kinh
                                                    nghiệm trong cộng đồng tổ chức các buổi workshop
                                                    trực tuyến để cùng nhau học hỏi và phát triển.
                                                    Và hiện tại, chúng tôi đã có những buổi workshop
                                                    mới dành cho bạn!
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
