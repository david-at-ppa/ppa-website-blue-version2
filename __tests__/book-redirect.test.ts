import nextConfig from '@/next.config'

describe('legacy route redirects', () => {
  it('redirects /book to the home assessment', async () => {
    const redirects = nextConfig.redirects ? await nextConfig.redirects() : []
    expect(redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: '/book',
          destination: '/#assessment',
          permanent: true,
        }),
      ])
    )
  })

  it('redirects /heritage to home', async () => {
    const redirects = nextConfig.redirects ? await nextConfig.redirects() : []
    expect(redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: '/heritage',
          destination: '/',
          permanent: true,
        }),
      ])
    )
  })

  it('redirects /heritage/about to /about-us', async () => {
    const redirects = nextConfig.redirects ? await nextConfig.redirects() : []
    expect(redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: '/heritage/about',
          destination: '/about-us',
          permanent: true,
        }),
      ])
    )
  })

  it('redirects /about to /about-us', async () => {
    const redirects = nextConfig.redirects ? await nextConfig.redirects() : []
    expect(redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: '/about',
          destination: '/about-us',
          permanent: true,
        }),
      ])
    )
  })
})
