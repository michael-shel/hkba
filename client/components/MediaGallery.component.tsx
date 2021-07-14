import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react';
import { photos } from "./photos";
import $ from 'jquery';
import { Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

const MediaGallery = ({ media }) => {

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };
    const router = useRouter();

    useEffect(() => {
        $(document).ready(function () {
            var $ = require('jquery');
            var jQueryBridget = require('jquery-bridget');
            var Masonry = require('masonry-layout');
            var imagesLoaded = require('imagesloaded');
            imagesLoaded.makeJQueryPlugin($);
            jQueryBridget('masonry', Masonry, $);

            var $grid = $('.grid').imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    columnWidth: '.grid-sizer'
                });
            });
        });
    })

    const [show, setShow] = useState(false);
    const [imgSrc, SetImgSrc] = useState('');
    const [imgContent, SetImgContent] = useState('');
    const [imgHeader, SetImgHeader] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true) }
    function showModal(image) {
        setShow(true)
        SetImgSrc(`http://localhost:1337${image.url}`);
        SetImgContent(image.caption);
        SetImgHeader(image.alternativeText);
    }
    return (
        <div className="grid-gallery">
            {/* <div className="my-5">
                <Link href={`/gallery`}>
                    <a className="regular-shadow neumorphism-dynamic-btn p-3 flex items-center text-2xl capitalize">
                        Назад
                    </a>
                </Link>
            </div> */}
            <Modal
            show={show}
            onHide={handleClose}
            dialogClassName="gallery-modal"
            >
                <Modal.Header>
                    <div className="modal-title-static px-3">
                        <Modal.Title>{imgHeader}</Modal.Title>
                    </div>
                    <button onClick={handleClose} type="button" className="close-btn close m-0" data-dismiss="modal" aria-label="Close">
                        <span className="i-close--grey close-button"></span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <img className="gl-img" src={imgSrc} alt="" />
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="content-alt">
                                <ReactMarkdown children={imgContent} />
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            <div className="grid">
                <div className="grid-sizer"></div>
                {media.ArticleBase.images.map((image, i) => (
                    <div key={i} className="grid-item" onClick={() => showModal(image)}>
                        <img src={`http://localhost:1337${image.url}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MediaGallery;