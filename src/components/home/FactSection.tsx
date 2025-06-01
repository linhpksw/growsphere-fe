import React from 'react';
import CountUpContent from '../common/counter/CountUpContent';


const CounterItem = [
    {
        id: 1,
        number: 10,
        numberLetter: 'k+',
        title: 'Sản phẩm hữu cơ',
    },
    {
        id: 2,
        number: 7,
        numberLetter: 'k+',
        title: 'Lượng cây đã cung cấp',
    },
    {
        id: 3,
        number: 5,
        numberLetter: 'k+',
        title: 'Nông dân kinh nghiệm',
    },
    {
        id: 4,
        number: 6,
        numberLetter: 'k+',
        title: 'Giải thưởng về cây xanh',
    }
]

const FactSection = () => {
    return (
        <section className="bd-counter__area fix">
            <div className="container">
                <div className="bd-counter__main theme-bg pt-100 pb-25">
                    <div className="row">
                        <span className="bd-counter-shape-line"></span>
                        {CounterItem.map((item, num) => (
                            <div className="col-xl-3 col-lg-3 col-md-6" key={num}>
                                <div className="bd-counter__single-item mb-60">
                                    <div className="bd-counter__content">
                                        <span className="counter"><CountUpContent number={item.number} text={item.numberLetter} /></span>
                                        <h4>{item.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FactSection;