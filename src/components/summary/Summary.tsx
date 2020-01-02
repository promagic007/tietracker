import React from 'react';
import {useSelector} from 'react-redux';

import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/react';

import {useTranslation} from 'react-i18next';

import styles from './Summary.module.scss';

import {rootConnector} from '../../store/thunks/index.thunks';
import {RootState} from '../../store/reducers';

import {Summary as SummaryData} from '../../store/interfaces/summary';

import {formatCurrency} from '../../utils/utils.currency';
import {formatTime} from '../../utils/utils.time';

import {Settings} from '../../models/settings';

const Summary: React.FC = () => {

    const {t} = useTranslation('summary');

    const summary: SummaryData | undefined = useSelector((state: RootState) => state.summary.summary);
    const settings: Settings = useSelector((state: RootState) => state.settings.settings);

    return (<div className="ion-padding-end ion-padding-top">
        <h1>{t('summary')}</h1>
        <IonCard className={styles.card} color="card">
            <IonCardHeader className={styles.header}>
                <IonCardSubtitle className={styles.subtitle}>{t('tracked')} {formatTime(summary !== undefined ? summary.milliseconds : undefined)}</IonCardSubtitle>
                <IonCardTitle>{t('billable')} {formatCurrency(summary !== undefined ? summary.billable : undefined, settings.currency)}</IonCardTitle>
            </IonCardHeader>
        </IonCard>
    </div>);
};

export default rootConnector(Summary);
