import { DocSectionCode } from '@/components/doc/common/docsectioncode';
import { DocSectionText } from '@/components/doc/common/docsectiontext';

export function ImportDoc(props) {
    const code = {
        basic: `
import { ListBox } from 'primereact/listbox';
        `
    };

    return (
        <>
            <DocSectionText {...props}></DocSectionText>
            <DocSectionCode code={code} hideToggleCode import hideCodeSandbox hideStackBlitz />
        </>
    );
}
