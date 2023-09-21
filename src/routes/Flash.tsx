import { useEffect, useState } from "react";
import axios from "axios";
import { QrScanner } from '@yudiel/react-qr-scanner';

export default function Wrapper(props: any) {
    const [wineList, setWineList] = useState([]);
    const [selectedWine, setSelectedWine] = useState<string | null>(null);

    useEffect(() => {
        document.title = props.title;

        axios.get('http://10.25.130.204:1337/api/wine-bottles', {
        headers: {
        'Authorization': `Bearer a1df87a2e47809f5b8eeabc0cdbed733bba95ca8c1b63e06790c095c3d7bf95892d7d137b2374d42fb9795ca7da797002edb7e58dee3296aa687becfb06dd2fbb0fd72ffca17018a8e9c007335265a49f86374151f605ee6a4e23bb32484a5f1a87027591d3538f087672359838f83bb4293adc805b45d6a680be6d411e835e8`
            },
        }).then(response => {
            setWineList(response.data);
        }).catch(error => {
            console.error("Error fetching wine list:", error);
        });

    }, [props.title]);

    const handleQRScan = (result: string) => {
        if (selectedWine) {
            axios.post('http://10.25.130.204:1337/api/qr-code-bottles', {
                wine_bottle: selectedWine,
                QrCodeUrl: result
            }, {
                headers: {
                    'Authorization': `Bearer a1df87a2e47809f5b8eeabc0cdbed733bba95ca8c1b63e06790c095c3d7bf95892d7d137b2374d42fb9795ca7da797002edb7e58dee3296aa687becfb06dd2fbb0fd72ffca17018a8e9c007335265a49f86374151f605ee6a4e23bb32484a5f1a87027591d3538f087672359838f83bb4293adc805b45d6a680be6d411e835e8`
                },
            }).then(() => {
                console.log("QR Code saved successfully!");
            }).catch(error => {
                console.error("Error saving QR Code:", error);
            });
        }
    };
    

    return (
        <>
            <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/flash.css'} />
            
            <select
                value={selectedWine || ''}
                onChange={(e) => setSelectedWine(e.target.value)}
            >
                <option value="">Sélectionnez un vin</option>
                {wineList.map((wine: any) => (
                    <option key={wine.attributes.id} value={wine.id}>{wine.attributes.Name}</option>
                ))}
            </select>

            <QrScanner
                onDecode={handleQRScan}
                onError={(error) => console.log(error?.message)}
            />
        </>
    );
}
