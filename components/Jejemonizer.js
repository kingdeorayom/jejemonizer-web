import { useRef, useState } from 'react';
import { useOpenSans } from '@/utils/fonts';
import dictionary from '@/utils/dictionary';
import styles from '@/styles/Home.module.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Jejemonizer = () => {

    const inputRef = useRef();

    const [jejemonText, setJejemonText] = useState('')
    const [isCopied, setIsCopied] = useState(false)

    const jejemonize = (input) => {

        setIsCopied(false)

        let jejemonized =

            [...input.toLowerCase()].map((character, index) => {
                if (dictionary[character]) {
                    return dictionary[character]
                }
                if (index % 2 !== 0) {
                    return character.toUpperCase();
                }
                return character;
            }).join('')

        setJejemonText(jejemonized)

    }

    const resetJejemonizer = () => {
        inputRef.current.value = "";
        setJejemonText('')
    }

    const copyToClipboard = () => {
        setIsCopied(true)
    }

    return (
        <section>

            <textarea
                ref={inputRef}
                className={`${useOpenSans.className} ${styles.input}`}
                placeholder='Enter text here to Jejemonize...'
                aria-multiline
                rows={3}
                onChange={(input) => jejemonize(input.target.value)}
            />

            <label>Result:</label>
            <textarea
                className={`${useOpenSans.className} ${styles.result}`}
                aria-multiline
                rows={7}
                placeholder='You will see the result here as you type'
                value={jejemonText}
                disabled
            />

            {
                isCopied ?
                    <div className={styles.alertWrapper}>
                        {
                            jejemonText.length !== 0 ?
                                <label className={styles.success}>Copied!</label> :
                                <label className={styles.error}>Type something!</label>
                        }
                    </div> :
                    null
            }

            <div className={styles.buttonContainer}>
                <CopyToClipboard text={jejemonText} onCopy={copyToClipboard}>
                    <button className={`${useOpenSans.className} ${styles.clipboardButton}`}
                    >
                        Copy result to clipboard
                    </button>
                </CopyToClipboard>
            </div>

            <div className={styles.buttonContainer}>
                <button
                    onClick={resetJejemonizer}
                    className={`${useOpenSans.className} ${styles.resetButton}`}
                >
                    Reset Jejemonizer
                </button>
            </div>

        </section>
    )
}

export default Jejemonizer