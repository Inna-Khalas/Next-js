// import StatusLabel, { Status } from './components/active-label';

import AddCompanyButton from './components/add-company-button';

export default function Home() {
  // console.log(headers());

  return (
    <main>
      {/* <h1>{new Date().toTimeString()}</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
      <AddCompanyButton />
    </main>
  );
}
