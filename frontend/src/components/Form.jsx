import React, {useEffect, useState} from "react";
import "../Forms.css"
import axios from 'axios';
import base_url from "../config";

const Form = ({ formRef }) => {
    const [text, setText] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dots, setDots] = useState(1);

    // Эффект для обновления точек анимации
    useEffect(() => {
        let interval;
        if (loading) {
            interval = setInterval(() => {
                setDots((prevDots) => (prevDots % 3) + 1);
            }, 500); // Интервал обновления точек
        }
        return () => clearInterval(interval);
    }, [loading]);

    // Функция для отправки POST запроса
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Включаем анимацию
        setResponse(null); // Очищаем старый ответ

        try {
            const url = base_url + '/model/apply'; // Используем правильное имя переменной
            const result = await axios.post(url, { 'text': text });
            setResponse(result.data);
        } catch (error) {
            console.error('Error sending POST request:', error);
        } finally {
            setLoading(false); // Отключаем анимацию после получения ответа
        }
    };



    return (
        <div
            className="ld-container container"
            style={{
                position: "relative", // Убедитесь, что контейнер позиционирован относительно родителя
                height: "100%", // Установите высоту контейнера
            }}
        >
            <div className="row ld-row ld-row-outer">
                <div className="wpb_column vc_column_container vc_col-sm-12 liquid-column-634d4b2e42856">
                    <div className="vc_column-inner  ">
                        <div className="wpb_wrapper">
                            <div
                                id="ld_images_group_element_634d4b2e42909"
                                className="lqd-imggrp-single ld_images_group_element_634d4b2e42909"
                            >
                                <div
                                    className="lqd-imggrp-img-container"
                                    data-parallax="true"
                                    data-parallax-from='{"y":25}'
                                    data-parallax-to='{"y":-80}'
                                    data-parallax-options='{"overflowHidden":false,"ease":"linear","start":"top bottom"}'
                                    style={{ transform: "translate3d(0px, -18.7745px, 0px)" }}
                                >
                                    <figure className="loaded">
                                        <img
                                            src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/dots-1.svg"
                                            className="attachment-full size-full"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="z-index-2 pull-down-column wpb_column vc_column_container vc_col-sm-12 liquid-column-634d4b2e43776 liquid-column-responsive-634d4b2e43778 vc_col-has-fill"
                    data-parallax="true"
                    data-parallax-from='{"y":-90}'
                    data-parallax-to='{"y":35}'
                    data-parallax-options='{"ease":"linear","start":"top bottom"}'
                >
                    <div
                        className="vc_column-inner  vc_custom_1599657780294"
                        style={{
                            borderRadius: "0px 0px 15px 15px",
                            transform: "translate3d(0px, -62.4625px, 0px)",
                        }}
                    >
                        <div className="wpb_wrapper">
                            <div
                                ref={formRef}
                                className="ld-fancy-heading mask-text ld_fancy_heading_634d4b2e43890"
                            >
                                <h4
                                    className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default lqd-split-words ca-initvalues-applied lqd-animations-done split-text-applied"
                                    data-split-text="true"
                                    data-split-options='{"type":"words"}'
                                    data-custom-animations="true"
                                    data-ca-options='{"triggerHandler":"inview","animationTarget":".lqd-words > .split-inner","duration":"1000","delay":"120","ease":"power4.out","direction":"forward","initValues":{"y":70},"animations":{"y":0}}'
                                >
                                    <div
                                        style={{ position: "relative", display: "inline-block" }}
                                        className="split-unit lqd-words"
                                    >
                                        <span className="split-inner"> Учись легко сейчас</span>
                                    </div>
                                </h4>
                            </div>
                            <div className="ld-fancy-heading ld_fancy_heading_634d4b2e43f1a">
                                <p className="ld-fh-element lqd-highlight-underline lqd-highlight-grow-left text-decoration-default">
                                    Испытай модель, которая поможет легко пронализировать отызвы на ваш курс
                                </p>
                            </div>
                            <div
                                id="ld_cf7_634d4b2e4430b"
                                className="lqd-contact-form lqd-contact-form-inputs-md lqd-contact-form-inputs-filled lqd-contact-form-inputs-round lqd-contact-form-button-lg lqd-contact-form-button-circle ld_cf7_634d4b2e4430b vc_custom_1599654723861"
                            >
                                <div
                                    role="form"
                                    className="wpcf7"
                                    id="wpcf7-f75-p5-o1"
                                    lang="en-US"
                                    dir="ltr"
                                >
                                    <div className="screen-reader-response">
                                        <p role="status" aria-live="polite" aria-atomic="true" />
                                        <ul />
                                    </div>
                                    <form
                                        onSubmit={handleSubmit}
                                        method="post"
                                        className="wpcf7-form init"
                                        noValidate="novalidate"
                                        data-status="init"
                                    >
                                        <div className="row">
                                            <div className="col-md-12 mb-4">
                                                <span className="wpcf7-form-control-wrap" data-name="textarea-312">
                                                    <textarea
                                                        onChange={(e) => setText(e.target.value)}
                                                        required
                                                        name="textarea-312"
                                                        cols={10}
                                                        rows={5}
                                                        className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                                                        aria-required="true"
                                                        aria-invalid="false"
                                                        placeholder="Отзыв"
                                                    />
                                                </span>
                                            </div>
                                            <div className="col-md-12">
                                                <input
                                                    type="submit"
                                                    value="Отправить"
                                                    className="wpcf7-form-control has-spinner wpcf7-submit"
                                                />
                                            </div>
                                        </div>
                                        <div className="wpcf7-response-output" aria-hidden="true"/>
                                    </form>
                                    {/* Анимация "Обрабатываем запрос" */}
                                    {loading && (
                                        <div className="loading-message">
                                            Обрабатываем запрос{' '.repeat(dots)}
                                        </div>
                                    )}

                                    {/* Вывод категорий, если получен ответ */}
                                    {response && (
                                        <div className="category-results">
                                            <h6 style={{ color: 'black', fontWeight: 'bold' }}>
                                                Полученные категории:
                                            </h6>
                                            <div className="checkbox-group" style={{padding: '0px 0px 0px 10px'}}>
                                                {['practice', 'teacher', 'theory', 'tech', 'relevance'].map((field) => (
                                                    <div
                                                        className="category-container"
                                                        key={field}
                                                        style={{
                                                            borderColor: '#005a1b',
                                                            backgroundColor: response[field] ? '#005a1b' : '#ffffff',
                                                            color: response[field] ? '#ffffff' : '#005a1b'
                                                        }}
                                                        onMouseEnter={(e) => {
                                                            e.target.style.transform = 'scale(0.95)';
                                                        }}
                                                        onMouseLeave={(e) => {
                                                            e.target.style.transform = 'scale(1)';
                                                        }}
                                                    >
                                                        {field}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="pull-down-column wpb_column vc_column_container vc_col-sm-12 liquid-column-634d4b2e448ea">
                    <div className="vc_column-inner  ">
                        <div className="wpb_wrapper">
                            <div
                                id="ld_images_group_element_634d4b2e449a1"
                                className="lqd-imggrp-single ld_images_group_element_634d4b2e449a1"
                            >
                                <div
                                    className="lqd-imggrp-img-container"
                                    data-parallax="true"
                                    data-parallax-from='{"y":90}'
                                    data-parallax-to='{"y":-50}'
                                    data-parallax-options='{"overflowHidden":false,"ease":"linear","start":"top bottom"}'
                                    style={{ transform: "translate3d(0px, 63.19px, 0px)" }}
                                >
                                    <figure className="loaded">
                                        <img
                                            src="https://multiusepro.liquid-themes.com/wp-content/uploads/2020/01/dots-1.svg"
                                            className="attachment-full size-full"
                                            alt=""
                                            loading="lazy"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
