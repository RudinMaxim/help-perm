"use client"
import React, { useEffect, useState } from 'react';
import styles from './CookieConsent.module.scss';

interface CookieConsentProps {
    onAccept: () => void;
    onDecline: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onDecline }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === null) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        onAccept();
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
        onDecline();
    };

    if (!isVisible) return null;

    return (
        <div className={styles.cookieConsent}>
            <p className={styles.message}>
                Мы используем файлы cookie для улучшения вашего опыта использования сайта.
                Продолжая использовать этот сайт, вы соглашаетесь на использование файлов cookie.
            </p>
            <div className={styles.buttons}>
                <button onClick={() => handleAccept()} className={styles.acceptButton}>
                    Принять
                </button>
                <button onClick={() => handleDecline()} className={styles.declineButton}>
                    Отклонить
                </button>
            </div>
        </div>
    );
};