import styles from './section.module.scss'

export const ContactSection = () => {
	return (
		<section className={styles.container} id='contact'>
			<div className={styles.wrapper}>
				<div className={styles.wrap}>
					<div className={styles.left}>
						<div>
							<img title='trucks' alt='trucks.png' src='/images/trucks.png' />
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.wrapright}>
							<div className={styles.title}>Get in touch</div>
							<form className={styles.form}>
								<div>
									<label htmlFor='username'>Name</label>
									<input
										type='text'
										id='username'
										name='username'
										aria-labelledby='username'
										placeholder='Enter your full name'
									/>
								</div>
								<div>
									<label htmlFor='company'>Company name</label>
									<input
										type='text'
										id='company'
										name='company'
										aria-labelledby='company'
										placeholder='Enter company name'
									/>
								</div>
								<div className={styles.wrapflex}>
									<div>
										<label htmlFor='phone'>Phone number</label>
										<input
											id='phone'
											type='text'
											name='phone'
											aria-labelledby='phone'
											placeholder='Enter phone number'
										/>
									</div>
									<div>
										<label htmlFor='email'>Email</label>
										<input
											id='email'
											type='email'
											name='email'
											aria-labelledby='email'
											placeholder='Enter email adress'
										/>
									</div>
								</div>
								<div className={styles.wraptextarea}>
									<label htmlFor='additional'>Additional data</label>
									<textarea
										rows={10}
										id='additional'
										name='additional'
										aria-labelledby='additional'
										placeholder='Enter your text here ...'
									/>
								</div>
								<div className={styles.wrapsubmit}>
									<button type='submit'>Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
