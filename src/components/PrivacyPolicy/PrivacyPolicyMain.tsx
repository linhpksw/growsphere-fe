import React from "react";
import Link from "next/link";
import ContactForm from "../contact/ContactForm";
import RefundForm from "./RefundForm";

const PrivacyPolicyMain = () => {
  return (
    <>
      <section className="terms_conditions_section section_space_lg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav tabs_nav_boxed unordered_list_block mb-60"
                role="tablist"
              >
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_privacy_policy"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Policy & Privacy</span>
                  </button>
                </li>
                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_conditions"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Terms & Conditions</span>
                  </button>
                </li>

                <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#product_refund_policy"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span> Refund Policy</span>
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content mb-60">
                <div
                  className="tab-pane fade show active"
                  id="tab_privacy_policy"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">Chính sách Bảo mật Thông tin</h3>
                    <p>
                      Tại <strong>GrowSphere</strong>, chúng tôi trân trọng quyền riêng tư của bạn
                       và cam kết bảo vệ thông tin cá nhân của người dùng. 
                      Chính sách Bảo mật này nhằm giải thích cách chúng tôi thu thập,
                      sử dụng và bảo vệ dữ liệu của bạn khi bạn tương tác với nền tảng của chúng tôi.
                    </p>

                    <h4 className="info_title">Vì sao chúng tôi thu thập dữ liệu</h4>
                    <p>
                      Là đơn vị cung cấp nền tảng <strong>GrowSphere</strong>  – hệ sinh thái trồng và chăm sóc cây thông minh, chúng 
                      {/* { "<strong>Orgado</strong> -e commerce "} you may collect and{" "} */}
                      {/* <Link className="link" href="/faq">
                        Google require website
                      </Link>{" "} */}
                      <span> tôi thu thập thông tin nhằm mục đích:</span>
                    </p>

                    <span className="list_item_text">
                      <strong>1. Thông tin cá nhân:</strong> Khi bạn tạo tài khoản hoặc
                      thực hiện mua hàng, chúng tôi có thể thu thập các thông tin như:
                      họ tên, địa chỉ email, địa chỉ giao hàng và thông tin thanh toán
                      để phục vụ việc xử lý đơn hàng và hỗ trợ khách hàng.
                    </span>
                    <br />
                    <span className="list_item_text">
                      <strong>2. Dữ liệu duyệt web:</strong> Chúng tôi có thể thu thập thông tin về hành
                      vi truy cập của bạn trên trang web (như sản phẩm bạn
                       quan tâm, trang bạn đã xem) để cải thiện chất lượng dịch
                      vụ và gợi ý sản phẩm phù hợp hơn với bạn.
                    </span>
                    <br />
                    <span className="list_item_text">
                      <strong>3. Cookies và công nghệ theo dõi:</strong> Chúng tôi sử dụng cookies và
                      các công nghệ tương tự để lưu trữ dữ liệu về phiên làm việc, tương tác
                      của bạn với website. Những dữ liệu này giúp chúng tôi cá nhân 
                      hóa trải nghiệm người dùng và nâng cao hiệu suất của nền tảng.
                    </span>
                    <br />
                    <span className="list_item_text">
                      <strong>4. Dịch vụ bên thứ ba:</strong> Một số dịch vụ bên thứ ba
                      phổ biến (như Google) yêu cầu chúng tôi công khai chính 
                      sách bảo mật trên website để đảm bảo tuân thủ 
                      quy định và tiêu chuẩn của họ.
                    </span>

                    <h4 className="info_title">
                      Liên hệ và phản hồi
                    </h4>
                    <p className="mb-1">
                      Nếu bạn có bất kỳ câu hỏi, góp ý hoặc muốn báo cáo sự cố liên quan đến quyền riêng tư, vui lòng liên hệ qua email:
                    </p>
                    <p>
                      <Link className="link" href="mailto:howdy@paradox.com">
                        <strong>email nhóm mình</strong>@gmail.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Thay đổi chính sách mà không cần thông báo trước
                    </h4>
                    <p className="mb-0">
                      Chính sách Bảo mật này có thể thay đổi bất kỳ lúc nào. 
                      Bạn đồng ý rằng việc tiếp tục sử dụng website sau các thay 
                      đổi đồng nghĩa với việc chấp nhận các điều khoản cập nhật. 
                      Chúng tôi không cam kết gửi thông báo cho từng thay đổi, trừ 
                      khi sự thay đổi đó được cho là đáng kể theo đánh giá riêng 
                      của chúng tôi và cần được thông báo công khai trên website 
                      hoặc qua email.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_terms_conditions"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Điều khoản và Điều kiện Sử dụng
                    </h3>
                    <p>
                      Thỏa thuận Điều khoản và Điều kiện sử dụng quy định các 
                      nguyên tắc mà người dùng cần tuân thủ khi sử dụng nền tảng 
                      GrowSphere, đồng thời thể hiện những quyền và trách nhiệm 
                      mà chúng tôi – đơn vị quản lý website – có thể thực hiện. 
                      Đây được xem như một hợp đồng pháp lý{" "}
                      <Link className="link" href="/contact">
                        giữa bạn (người dùng) và chúng tôi (GrowSphere)
                      </Link>
                      . Trong trường hợp có tranh chấp pháp lý, đây là căn cứ 
                      để các bên có thể đối chiếu quyền lợi và nghĩa vụ.
                    </p>
                    <p>
                      Việc đặt ra điều khoản không phải là khái niệm mới 
                      – con người luôn mong muốn có quyền riêng tư và sự bảo 
                      vệ trong không gian sống và kỹ thuật số. Việc quy định 
                      rõ ràng điều kiện sử dụng giúp xây dựng một môi trường 
                      công bằng, minh bạch và an toàn cho tất cả người dùng.
                    </p>
                    <h4 className="info_title">
                      Lý do thu thập và sử dụng thông tin:
                    </h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>1. Nâng cao trải nghiệm người dùng:</strong> Chúng tôi 
                          sử dụng thông tin của bạn để cá nhân hóa trải nghiệm, gợi ý sản 
                          phẩm và dịch vụ phù hợp hơn, giúp quá trình mua hàng và chăm 
                          cây diễn ra thuận tiện.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>2. Xử lý đơn hàng:</strong> Chúng tôi thu thập 
                          thông tin để xử lý và hoàn tất các đơn hàng của bạn, 
                          bao gồm giao hàng và hỗ trợ sau bán.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>3. Tiếp thị và liên hệ:</strong> Với sự đồng ý của bạn, 
                          chúng tôi có thể gửi email hoặc tin nhắn SMS về các chương trình 
                          khuyến mãi, cập nhật sản phẩm hoặc các nội dung hữu ích liên quan 
                          đến trồng cây và môi trường.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title">Thông tin chúng tôi thu thập</h4>
                    <p>
                      Khi bạn sử dụng nền tảng GrowSphere, chúng tôi có thể thu thập các 
                      thông tin như: Họ tên, Địa chỉ email, Địa chỉ giao hàng, Thông tin 
                      thanh toán. Những dữ liệu này chỉ được sử dụng để cung cấp và nâng 
                      cao chất lượng dịch vụ cho bạn.
                    </p>

                    <h4 className="info_title">Giới hạn trách nhiệm</h4>
                    <p>
                      Tại GrowSphere, chúng tôi luôn nỗ lực mang đến trải nghiệm 
                      sử dụng và mua sắm mượt mà, tuy nhiên, bạn cần hiểu rõ các giới hạn sau:
                    </p>
                    <ul className="icon_list unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>1. Thông tin sản phẩm:</strong>{" "}
                          Dù luôn cố gắng đảm bảo tính chính xác, đôi khi 
                          vẫn có thể xảy ra sai sót trong mô tả, giá cả hoặc 
                          tình trạng sản phẩm. Chúng tôi có quyền điều chỉnh 
                          và/hoặc hủy các đơn hàng bị ảnh hưởng bởi sai sót đó.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>2. Hài lòng của khách hàng:</strong>  Nếu bạn 
                          có bất kỳ vấn đề nào về sản phẩm hoặc trải nghiệm dịch 
                          vụ, xin vui lòng liên hệ bộ phận hỗ trợ để được giải 
                          quyết nhanh chóng và tận tình.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>3. Khả năng truy cập website và sản phẩm:</strong>{" "}
                          Website hoặc sản phẩm có thể tạm thời gián đoạn vì bảo 
                          trì hoặc sự cố kỹ thuật. Chúng tôi sẽ cố gắng khắc phục 
                          nhanh chóng nếu điều đó xảy ra.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>4. Bảo mật và an toàn:</strong> We
                          Dù áp dụng các biện pháp bảo mật, chúng tôi 
                          không thể đảm bảo 100% an toàn trước virus hay 
                          phần mềm độc hại. Người dùng được khuyến nghị 
                          sử dụng phần mềm diệt virus cập nhật và cẩn 
                          trọng khi tải nội dung từ nền tảng.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Việc bạn tiếp tục sử dụng trang web và thực hiện 
                      giao dịch đồng nghĩa với việc bạn hiểu và 
                      chấp nhận các giới hạn, điều khoản nêu trên.
                    </p>

                    <h4 className="info_title">
                      Liên hệ
                    </h4>
                    <p className="mb-1">
                      Nếu bạn có bất kỳ câu hỏi, góp ý hay cần phản ánh, xin vui lòng liên hệ qua:
                    </p>
                    <p>
                      <Link
                        className="author_mail"
                        href="mailto:howdy@paradox.com"
                      >
                        email nhóm@gmail.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Chính sách thay đổi mà không cần thông báo trước
                    </h4>
                    <p className="mb-0">
                      Chính sách Điều khoản & Điều kiện này có thể thay 
                      đổi mà không cần thông báo trước. Bạn đồng ý rằng 
                      mỗi lần truy cập website, bạn nên kiểm tra nội dung 
                      chính sách để cập nhật phiên bản mới nhất. Trừ khi 
                      thay đổi có mức ảnh hưởng lớn, chúng tôi sẽ 
                      không gửi thông báo riêng.
                    </p>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="product_refund_policy"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">Chính sách Hoàn tiền Sản phẩm</h3>
                    <p>
                      Tại <strong>GrowSphere</strong>, chúng tôi cam kết mang 
                      đến cho bạn những sản phẩm chất lượng cao và trải nghiệm 
                      mua sắm đáng tin cậy. Tuy nhiên, chúng tôi hiểu rằng có 
                      những trường hợp bạn có thể cần trả lại sản phẩm. Chính 
                      sách hoàn tiền của chúng tôi được thiết kế để giúp quy 
                      trình này trở nên đơn giản và minh bạch nhất có thể.
                    </p>

                    <h4 className="info_title">Điều kiện được hoàn tiền:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Sản phẩm còn nguyên vẹn, chưa qua sử dụng, và còn đầy đủ bao bì ban đầu.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Việc yêu cầu hoàn trả phải được thực hiện trong vòng <strong>[X]</strong>{" "}
                           ngày kể từ khi nhận hàng.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Các sản phẩm được cá nhân hóa, thiết kế riêng (như chậu cây khắc tên, kit theo yêu cầu…) <strong>sẽ không được hoàn tiền</strong>, trừ khi bị lỗi kỹ thuật hoặc hư hỏng khi nhận hàng.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title">Quy trình yêu cầu hoàn tiền:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Để bắt đầu quy trình hoàn trả sản phẩm, vui lòng liên hệ bộ phận chăm sóc khách hàng qua:
                          Orgadoadmin@gmail.com.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Chúng tôi sẽ hướng dẫn bạn chi tiết và, nếu cần, cung cấp mã số xác nhận hoàn hàng (Mã RMA).
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">Phí vận chuyển khi hoàn trả:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Khách hàng chịu trách nhiệm về chi phí 
                          gửi trả sản phẩm, trừ khi sản phẩm bị lỗi 
                          kỹ thuật hoặc hư hỏng do vận chuyển.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Chúng tôi khuyến khích bạn sử dụng dịch vụ 
                          chuyển phát có mã theo dõi để đảm bảo hàng 
                          hóa được gửi trả an toàn.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">Kiểm tra và xử lý hoàn tiền:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Sau khi nhận được sản phẩm hoàn trả, 
                          đội ngũ của chúng tôi sẽ tiến hành kiểm 
                          tra để đảm bảo sản phẩm đáp ứng điều kiện hoàn tiền.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Nếu sản phẩm đạt yêu cầu, khoản tiền sẽ được hoàn trong vòng <strong>[X]</strong> ngày làm việc.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Khoản hoàn tiền sẽ được chuyển lại đúng phương thức thanh toán bạn đã sử dụng khi đặt hàng.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">Giá trị hoàn tiền:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Khoản tiền hoàn lại sẽ bao gồm <strong>giá trị sản phẩm và các loại thuế (nếu có).</strong>
                        </span>
                      </li>

                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Phí vận chuyển ban đầu sẽ không được hoàn</strong>, trừ khi nguyên nhân trả hàng là do lỗi của chúng tôi.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">
                      {" "}
                      Sản phẩm bị lỗi hoặc hư hỏng:
                    </h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Nếu bạn nhận được sản phẩm bị lỗi hoặc hư hỏng, hãy liên hệ với chúng tôi <strong>ngay lập tức</strong>.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Chúng tôi có thể yêu cầu gửi ảnh sản phẩm hoặc tài liệu xác minh để đánh giá và đưa ra phương án <strong>hoàn tiền hoặc thay thế</strong> phù hợp.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title"> Chính sách đổi sản phẩm:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Chúng tôi không áp dụng hình thức đổi trực tiếp. 
                          Nếu bạn muốn một sản phẩm khác, vui lòng hoàn trả 
                          sản phẩm hiện tại theo hướng dẫn, sau đó 
                          <strong>đặt hàng lại sản phẩm mới.</strong>
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title"> Các mặt hàng không được hoàn tiền:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Thẻ quà tặng (Gift cards).
                        </span>
                      </li>
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Sản phẩm kỹ thuật số hoặc nội dung số có thể tải về (nếu có).
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title"> Thay đổi chính sách:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>GrowSphere</strong> có quyền cập nhật 
                          hoặc điều chỉnh chính sách hoàn tiền bất cứ lúc 
                          nào mà không cần thông báo trước. Mọi thay đổi sẽ 
                          có hiệu lực ngay khi được đăng tải trên website.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Nếu bạn có bất kỳ thắc mắc nào về chính sách hoàn tiền, 
                      vui lòng liên hệ đội ngũ chăm sóc khách hàng. Chúng tôi 
                      luôn sẵn sàng hỗ trợ và mong muốn mang lại trải nghiệm 
                      tốt nhất cho bạn. 
                      <br />
                      Xin cảm ơn vì đã tin tưởng <strong>GrowSphere</strong>!
                    </p>
                  </div>
                  <RefundForm/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <ContactForm/> */}
    </>
  );
};

export default PrivacyPolicyMain;
